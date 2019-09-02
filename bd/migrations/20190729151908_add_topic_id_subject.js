exports.up = async function(knex) {
  await knex.schema.table("subject", async t => {
    await t.string("topicId");
  });
};

exports.down = async function(knex) {
  await knex.schema.table("subject", async t => {
    await t.dropColumn("topicId");
  });
};
