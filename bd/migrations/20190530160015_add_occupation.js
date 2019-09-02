exports.up = async function(knex) {
  await knex.schema.table("professor", async t => {
    await t.string("occupation");
  });
  await knex.schema.table("speaker", async t => {
    await t.string("occupation");
  });
};

exports.down = async function(knex) {
  await knex.schema.table("professor", async t => {
    await t.dropColumn("occupation");
  });
  await knex.schema.table("speaker", async t => {
    await t.dropColumn("occupation");
  });
};
