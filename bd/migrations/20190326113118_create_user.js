exports.up = async function(knex) {
  await knex.schema.createTable("user", function(t) {
    t.increments("id")
      .unsigned()
      .primary();

    t.string("email").unique();
    t.string("password").notNullable();

    t.string("name").notNullable();
    t.string("lastname");
    t.string("cpf");

    t.integer("resource_id").unsigned();
    t.foreign("resource_id").references("resource.id");

    t.string("zendesk_id").unique();

    t.string("cellphone");
    t.string("otherphone");

    t.boolean("active")
      .notNull()
      .defaultTo(true);
    t.timestamps(true, true);
  });
};

exports.down = async function(knex) {
  await knex.schema.table("user", async t => {
    await t.dropForeign("resource_id");
    await t.dropColumn("resource_id");
  });
  await knex.schema.dropTableIfExists("user");
};
