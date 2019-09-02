exports.up = async function(knex) {
  await knex.schema.table("resource", async t => {
    await t.string("mimetype");
  });
};

exports.down = async function(knex) {
  await knex.schema.table("resource", async t => {
    await t.dropColumn("mimetype");
  });
};
