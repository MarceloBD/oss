exports.up = async function(knex) {
  await knex.schema.createTable("module", function(t) {
    t.increments("id")
      .unsigned()
      .primary();

    t.string("name").notNull();
    t.string("number");

    t.integer("exam_id").unsigned();
    t.foreign("exam_id").references("exam.id");

    t.boolean("active")
      .notNull()
      .defaultTo(true);

    t.timestamps(true, true);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("module");
};
