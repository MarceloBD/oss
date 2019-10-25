exports.up = async function(knex) {
  await knex.raw(
    "CREATE VIEW license_type_count AS select license.name, count(*) from material join license on material.license_id = license.id group by license.name"
  );
};

exports.down = async function(knex) {
  await knex.raw("drop VIEW license_type_count;");
};
