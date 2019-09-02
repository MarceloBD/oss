exports.up = async function(knex) {
  await knex.schema.createTable("enrollment", async function(t) {
    t.increments("id")
      .unsigned()
      .primary();

    t.integer("user_id").unsigned();
    t.foreign("user_id").references("user.id");

    t.integer("course_id").unsigned();
    t.foreign("course_id").references("course.id");

    t.timestamp("last_access").defaultTo(knex.fn.now());

    t.string("order_id");
    t.string("bling_order_id");

    t.timestamp("start");
    t.timestamp("end");

    t.boolean("active")
      .notNull()
      .defaultTo(true);

    t.timestamps(true, true);
  });
};

exports.down = async function(knex) {
  await knex.schema.table("enrollment", async t => {
    await t.dropForeign("user_id");
    await t.dropColumn("user_id");

    await t.dropForeign("course_id");
    await t.dropColumn("course_id");
  });
  await knex.schema.dropTableIfExists("enrollment");
};
