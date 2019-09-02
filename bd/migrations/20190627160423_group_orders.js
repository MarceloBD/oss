exports.up = async function(knex) {
  const orders = await knex("order")
    .select(["bling_order_id", knex.raw("min(id) as id")])
    .whereNotNull("bling_order_id")
    .groupBy("bling_order_id")
    .having(knex.raw("count(*) > 1"));

  const updaters = orders.map(
    async order =>
      await knex("enrollment_order")
        .update({ order_id: order.id })
        .whereIn(
          "order_id",
          knex("order")
            .select("id")
            .where("bling_order_id", order.bling_order_id)
            .whereNot("id", order.id)
        )
  );
  const deleters = orders.map(
    async order =>
      await knex("order")
        .del()
        .whereNot("id", order.id)
        .where("bling_order_id", order.bling_order_id)
  );

  await Promise.all([...updaters, ...deleters]);
};

exports.down = async function(knex) {};
