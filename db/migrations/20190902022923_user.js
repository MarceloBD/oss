exports.up = async function(knex, Promise) {
  await knex.schema.createTable("user", t => {
    t.increments("id")
      .unsigned()
      .primary();

    t.string("name");
  });
};

exports.down = function(knex, Promise) {};
