exports.up = async function(knex) {
  await knex.raw('update "user" set email = lower(email);');

  await knex.raw(
    "create function email_to_lower() returns trigger as 'begin new.email := lower(new.email); return new; end' language 'plpgsql';"
  );

  await knex.raw(
    'create trigger lower_email before insert or update on "user" for each row execute procedure email_to_lower();'
  );
};

exports.down = async function(knex) {
  await knex.raw('drop trigger if exists lower_email on "user"');

  await knex.raw("drop function if exists email_to_lower");
};
