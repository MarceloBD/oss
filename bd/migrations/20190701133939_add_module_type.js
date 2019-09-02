exports.up = async function(knex) {
  await knex.schema.table("module", async t => {
    await t
      .string("type")
      .notNull()
      .defaultTo("STANDARD");
  });

  await knex("module")
    .where("name", "Módulo de Abertura")
    .update({ type: "FREE", updated_at: "NOW()" });
};

exports.down = async function(knex) {
  await knex.schema.table("module", async t => {
    await t.dropColumn("type");
  });
};
