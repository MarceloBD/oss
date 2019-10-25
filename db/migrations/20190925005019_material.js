exports.up = async knex => {
  await knex.schema.createTable("material", t => {
    t.increments("id")
      .unsigned()
      .primary();

    t.string("name").notNullable();

    t.string("type").notNullable();

    t.integer("version_id").unsigned();
    t.foreign("version_id").references("version.id");

    t.integer("license_id").unsigned();
    t.foreign("license_id").references("license.id");

    t.string("language");

    t.string("domain_name");

    t.string("description");

    t.string("url");

    t.string("source_type");

    t.string("open_source_id").unique();

    t.string("hash");

    t.boolean("active")
      .notNull()
      .defaultTo(true);

    t.timestamps(true, true);
  });
};

exports.down = async knex => {
  await knex.schema.dropTableIfExists("material");
};
