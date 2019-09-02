exports.up = async function(knex) {
  await knex.schema.table("bill", async t => {
    t.integer("order_id").unsigned();
    t.foreign("order_id").references("order.id");

    t.dropForeign("enrollment_id");
    return t.dropColumn("enrollment_id");
  });
};

exports.down = async function(knex) {
  await knex.schema.table("bill", async t => {
    t.integer("enrollment_id").unsigned();
    t.foreign("enrollment_id").references("enrollment.id");

    t.dropForeign("order_id");
    return t.dropColumn("order_id");
  });
};
