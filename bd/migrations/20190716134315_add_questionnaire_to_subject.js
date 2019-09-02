exports.up = async function(knex) {
  await knex.schema.table("subject", async t => {
    t.integer("questionnaire_id").unsigned();
    t.foreign("questionnaire_id").references("questionnaire.id");
  });
};

exports.down = async function(knex) {
  await knex.schema.table("subject", async t => {
    await t.dropColumn("questionnaire_id");
  });
};
