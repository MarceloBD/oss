exports.up = async function(knex) {
  await knex.schema.table("master_lesson", async t => {
    await t
      .boolean("trial")
      .notNull()
      .defaultTo(false);
  });
};

exports.down = async function(knex) {
  await knex.schema.table("master_lesson", async t => {
    await t.dropColumn("trial");
  });
};
