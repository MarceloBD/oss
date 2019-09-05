exports.seed = function(knex, Promise) {
  return knex("user")
    .del()
    .then(() => {
      return knex("user").insert([{ name: "marcelo" }]);
    });
};
