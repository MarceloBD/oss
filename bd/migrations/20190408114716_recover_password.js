exports.up = async function(knex) {
  await knex.schema.createTable("recover_password", function(t) {
    t.increments("id")
      .unsigned()
      .primary();

    t.string("token").notNullable();
    t.integer("user_id").unsigned();
    t.foreign("user_id").references("user.id");

    t.boolean("active")
      .notNull()
      .defaultTo(true);

    t.timestamps(true, true);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("recover_password");
};
