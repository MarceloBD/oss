exports.up = async function(knex) {
  await knex.schema.table("subject", async t => {
    await t.dropColumn("zendesk_id");
  });
};

exports.down = async function(knex) {};
