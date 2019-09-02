exports.up = async function(knex) {
  await knex.schema.createTable("video", function(t) {
    t.increments("id")
      .unsigned()
      .primary();

    t.string("external_id");

    t.integer("duration");

    t.boolean("active")
      .notNull()
      .defaultTo(true);

    t.timestamps(true, true);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("video");
};
