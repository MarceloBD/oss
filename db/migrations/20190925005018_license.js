exports.up = async knex => {
  await knex.schema.createTable("license", t => {
    t.increments("id")
      .unsigned()
      .primary();

    t.string("name").notNullable();

    t.string("version");

    t.string("license_type");

    t.boolean("active")
      .notNull()
      .defaultTo(true);

    t.timestamps(true, true);
  });
};

exports.down = async knex => {
  await knex.schema.dropTableIfExists("license");
};
