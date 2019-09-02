exports.up = async function(knex) {
  await knex.schema.table("course_subject", async t => {
    await t.timestamp("availability_date");
  });
};

exports.down = async function(knex) {
  await knex.schema.table("course_subject", async t => {
    await t.dropColumn("availability_date");
  });
};
