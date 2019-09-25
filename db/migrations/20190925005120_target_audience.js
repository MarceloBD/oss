exports.up = async knex => {
  await knex.schema.createTable("target_audience", t => {
    t.increments("id")
      .unsigned()
      .primary();

    t.string("name").notNullable();

    t.boolean("active")
      .notNull()
      .defaultTo(true);

    t.timestamps(true, true);
  });
};

exports.down = async knex => {
  await knex.schema.dropTableIfExists("target_audience");
};
