exports.up = async knex => {
  await knex.schema.createTable("user", t => {
    t.increments("id")
      .unsigned()
      .primary();

    t.string("name").notNullable();

    t.string("document").unique();

    t.string("email").unique();

    t.string("password").notNullable();

    t.string("cellphone");

    t.string("affiliction");

    t.boolean("active")
      .notNull()
      .defaultTo(true);

    t.timestamps(true, true);
  });
};

exports.down = async knex => {
  await knex.schema.dropTableIfExists("user");
};
