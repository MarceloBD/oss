exports.up = async function(knex) {
  await knex.schema.table("exam", async t => {
    t.string("type");
  });
};

exports.down = async function(knex) {
  await knex.schema.table("exam", async t => {
    await t.dropColumn("type");
  });
};
