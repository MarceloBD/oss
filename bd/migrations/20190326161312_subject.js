exports.up = async function(knex) {
  await knex.schema.createTable("subject", function(t) {
    t.increments("id")
      .unsigned()
      .primary();

    t.string("name");
    t.text("description");

    t.integer("module_id").unsigned();
    t.foreign("module_id").references("module.id");

    t.integer("video_id").unsigned();
    t.foreign("video_id").references("video.id");

    t.integer("resource_id").unsigned();
    t.foreign("resource_id").references("resource.id");

    t.string("section_id");

    t.string("zendesk_id");
    t.integer("order");

    t.boolean("active")
      .notNull()
      .defaultTo(true);

    t.timestamps(true, true);
  });
};

exports.down = async function(knex) {
  await knex.schema.table("subject", async t => {
    await t.dropForeign("module_id");
    await t.dropColumn("module_id");

    await t.dropForeign("resource_id");
    await t.dropColumn("resource_id");
  });
  await knex.schema.dropTableIfExists("subject");
};
