exports.up = async function(knex) {
  await knex.schema.table("enrollment", t => {
    t.dropColumn("order_id");
    t.dropColumn("bling_order_id");
    t.timestamp("start_trial");
    t.timestamp("end_trial");
    t.dropColumn("end");
    t.dropColumn("start");
  });
};

exports.down = async function(knex) {
  await knex.schema.table("enrollment", t => {
     t.string("bling_order_id");
     t.string("order_id");
     t.dropColumn("start_trial");
     t.dropColumn("end_trial");
     t.timestamp("end");
     t.timestamp("start");
  });
};
