const prisma = require("../../phoenix/src/utils/prisma-client").prisma;

exports.up = async function(knex) {
  const subjectIds = await knex
    .select("id")
    .from("subject")
    .whereNull("questionnaire_id");

  const questionnaireIds = await knex("questionnaire")
    .insert(subjectIds.map(() => ({ active: true })))
    .returning("id");

  await Promise.all(
    subjectIds.map(({ id }, idx) =>
      knex("subject")
        .where("id", "=", id)
        .update({
          questionnaire_id: questionnaireIds[idx]
        })
    )
  );
};

exports.down = async function(knex) {};
