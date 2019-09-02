exports.up = async function(knex) {
  await knex.schema.table("alternative", async t => {
    await t.text("justification");
  });
};

exports.down = async function(knex) {
  await knex.schema.table("alternative", async t => {
    await t.dropColumn("justification");
  });
};
