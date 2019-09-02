exports.up = async function(knex) {
  await knex.schema.table("subject", t => {
    t.string("topic_id");
  });

  await knex.schema.table("course_subject", t => {
    t.dropColumn("topic_id");
  });
};

exports.down = async function(knex) {
  await knex.schema.table("subject", t => {
    t.dropColumn("topic_id");
  });

  await knex.schema.table("course_subject", t => {
    t.string("topic_id");
  });
};
