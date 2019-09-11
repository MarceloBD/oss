exports.up = async function(knex, Promise) {
  await knex.schema.createTable("user", t => {
    t.increments("id")
      .unsigned()
      .primary();

    t.string("email");

    t.string("password");
  });
};

exports.down = function(knex, Promise) {};
