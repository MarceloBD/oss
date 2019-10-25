exports.up = async function(knex) {
  await knex.raw(
    "CREATE VIEW domain_type_count AS select domain_name ,count(*) from material group by domain_name"
  );
};

exports.down = async function(knex) {
  await knex.raw("drop VIEW domain_type_count;");
};
