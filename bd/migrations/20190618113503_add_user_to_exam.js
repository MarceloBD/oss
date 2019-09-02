exports.up = async function(knex) {
  await knex.schema.table("exam", async t => {
    t.integer("user_id").unsigned();
    t.foreign("user_id").references("user.id");

    t.integer("module_id").unsigned();
    t.foreign("module_id").references("module.id");
  });
};

exports.down = async function(knex) {
  await knex.schema.table("exam", async t => {
    await t.dropForeign("user_id");
    await t.dropColumn("user_id");

    await t.dropForeign("module_id");
    await t.dropColumn("module_id");
  });
};
