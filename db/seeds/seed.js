exports.seed = async (knex, Promise) => {
  await knex("user").del();

  const userIds = await knex("user").insert([
    {
      name: "Marcelo Diani",
      email: "marcelo.diani@usp.br",
      document: "41528788869",
      password: "123"
    }
  ]);
};
