exports.up = async function(knex) {
  await knex.schema.createTable("master_lesson", function(t) {
    t.increments("id")
      .unsigned()
      .primary();

    t.string("title");

    t.integer("repository_id").unsigned();
    t.foreign("repository_id").references("repository.id");

    t.integer("video_id").unsigned();
    t.foreign("video_id").references("video.id");

    t.integer("speaker_id").unsigned();
    t.foreign("speaker_id").references("speaker.id");

    t.integer("module_id").unsigned();
    t.foreign("module_id").references("module.id");

    t.integer("resume_id").unsigned();
    t.foreign("resume_id").references("resume.id");

    t.boolean("active")
      .notNull()
      .defaultTo(true);

    t.timestamps(true, true);
  });
};

exports.down = async function(knex) {
  await knex.schema.table("master_lesson", async t => {
    await t.dropForeign("repository_id");
    await t.dropColumn("repository_id");

    await t.dropForeign("resume_id");
    await t.dropColumn("resume_id");

    await t.dropForeign("video_id");
    await t.dropColumn("video_id");

    await t.dropForeign("speaker_id");
    await t.dropColumn("speaker_id");

    await t.dropForeign("module_id");
    await t.dropColumn("module_id");
  });
  await knex.schema.dropTableIfExists("master_lesson");
};
