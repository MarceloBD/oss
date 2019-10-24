exports.up = async function(knex) {
  await knex.raw(
    "CREATE VIEW material_type_count AS select type ,count(*) from material group by type"
  );
};

exports.down = async function(knex) {};
