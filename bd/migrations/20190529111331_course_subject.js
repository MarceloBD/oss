exports.up = async function(knex) {
  await knex.schema.createTable("course_subject", function(t) {
    t.increments("id")
      .unsigned()
      .primary();

    t.string("topic_id");

    t.integer("course_id").unsigned();
    t.foreign("course_id").references("course.id");

    t.integer("subject_id").unsigned();
    t.foreign("subject_id").references("subject.id");

    t.timestamps(true, true);
  });
};

exports.down = async function(knex) {
  await knex.schema.table("course_subject", async t => {
    await t.dropForeign("subject_id");
    await t.dropColumn("subject_id");

    await t.dropForeign("course_id");
    await t.dropColumn("course_id");
  });
  await knex.schema.dropTableIfExists("course_subject");
};
