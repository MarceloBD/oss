exports.up = async function(knex) {
  await knex.schema.table("subject", async t => {
    await t.dropForeign("video_id");
    await t.dropColumn("video_id");
  });
};

exports.down = async function(knex) {};
