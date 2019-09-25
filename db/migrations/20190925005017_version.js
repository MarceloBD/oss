exports.up = async knex => {
  await knex.schema.createTable("version", t => {
    t.increments("id")
      .unsigned()
      .primary();

    t.string("name").notNullable();

    t.datetime("release_date");

    t.boolean("active")
      .notNull()
      .defaultTo(true);

    t.timestamps(true, true);
  });
};

exports.down = async knex => {
  await knex.schema.dropTableIfExists("version");
};
