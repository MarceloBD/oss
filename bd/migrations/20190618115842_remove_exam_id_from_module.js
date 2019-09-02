exports.up = async function(knex) {
  await knex.schema.table("module", async t => {
    t.dropForeign("exam_id");
    t.dropColumn("exam_id");
  });
};

exports.down = async function(knex) {
  await knex.schema.table("exam", async t => {
    await t.dropColumn("module_id");
  });
};
