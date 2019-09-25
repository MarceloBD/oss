exports.up = async knex => {
  await knex.schema.createTable("post_comment", t => {
    t.increments("id")
      .unsigned()
      .primary();

    t.string("comment");

    t.integer("post_id").unsigned();
    t.foreign("post_id").references("post.id");

    t.integer("user_id").unsigned();
    t.foreign("user_id").references("user.id");

    t.boolean("active")
      .notNull()
      .defaultTo(true);

    t.timestamps(true, true);
  });
};

exports.down = async knex => {
  await knex.schema.table("post_comment", async t => {
    t.dropForeign("post_id");
    t.dropColumn("post_id");

    t.dropForeign("user_id");
    t.dropColumn("user_id");
  });
  await knex.schema.dropTableIfExists("post_comment");
};
