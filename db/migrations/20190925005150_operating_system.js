exports.up = async knex => {
  await knex.schema.createTable("operating_system", t => {
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
  await knex.schema.dropTableIfExists("operating_system");
};
