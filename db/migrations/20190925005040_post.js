exports.up = async knex => {
  await knex.schema.createTable("post", t => {
    t.increments("id")
      .unsigned()
      .primary();

    t.integer("material_id").unsigned();
    t.foreign("material_id").references("material.id");

    t.boolean("checked")
      .notNull()
      .defaultTo(false);

    t.integer("user_id").unsigned();
    t.foreign("user_id").references("user.id");

    t.integer("number_of_access")
      .unsigned()
      .defaultTo(0);

    t.boolean("active")
      .notNull()
      .defaultTo(true);

    t.timestamps(true, true);
  });
};

exports.down = async knex => {
  await knex.schema.table("post", async t => {
    t.dropForeign("material_id");
    t.dropColumn("material_id");

    t.dropForeign("user_id");
    t.dropColumn("user_id");
  });
  await knex.schema.dropTableIfExists("post");
};
