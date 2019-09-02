exports.up = async function(knex) {
  await knex.schema.createTable("lesson", function(t) {
    t.increments("id")
      .unsigned()
      .primary();

    t.string("title");

    t.integer("number");

    t.integer("repository_id").unsigned();
    t.foreign("repository_id").references("repository.id");

    t.integer("video_id").unsigned();
    t.foreign("video_id").references("video.id");

    t.integer("resume_id").unsigned();
    t.foreign("resume_id").references("resume.id");

    t.integer("professor_id").unsigned();
    t.foreign("professor_id").references("professor.id");

    t.integer("questionnaire_id").unsigned();
    t.foreign("questionnaire_id").references("questionnaire.id");

    t.integer("subject_id").unsigned();
    t.foreign("subject_id").references("subject.id");

    t.boolean("active")
      .notNull()
      .defaultTo(true);

    t.timestamps(true, true);
  });
};

exports.down = async function(knex) {
  await knex.schema.table("lesson", async t => {
    await t.dropForeign("repository_id");
    await t.dropColumn("repository_id");

    await t.dropForeign("video_id");
    await t.dropColumn("video_id");

    await t.dropForeign("resume_id");
    await t.dropColumn("resume_id");

    await t.dropForeign("professor_id");
    await t.dropColumn("professor_id");

    await t.dropForeign("questionnaire_id");
    await t.dropColumn("questionnaire_id");

    await t.dropForeign("subject_id");
    await t.dropColumn("subject_id");
  });
  await knex.schema.dropTableIfExists("lesson");
};
