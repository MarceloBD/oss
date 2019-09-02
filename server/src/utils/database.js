import { fromGlobalId } from 'graphql-relay';
import assert from 'assert';
import knex from 'knex';
import omit from 'lodash/omit';

const snakeToCamel = s => s.replace(/(_\w)/g, c => c[1].toUpperCase());
const convertKeysMiddleware = data => {
  if (data) {
    return Object.keys(data).reduce((previous, key) => ({ ...previous, [snakeToCamel(key)]: data[key] }), {});
  }
  return {};
};

const createKnexConnection = () =>
  knex({
    client: process.env.DB_CLIENT,
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
    pool: { min: 0, max: 50 },
    postProcessResponse: (result, queryContext) => {
      let newResult = result.rows ? result.rows : result;
      if (Array.isArray(newResult)) {
        newResult = newResult.map(row => convertKeysMiddleware(row));
        if (queryContext && queryContext.limit === '1') {
          [newResult] = newResult;
        }
      } else {
        newResult = convertKeysMiddleware(result);
      }
      return newResult;
    },
  });

const knexConnection = createKnexConnection();
const knexConnectionLog = createKnexConnection();

const checkConnection = async () => {
  try {
    const { check } = await knexConnection.raw('select 1+1 as check').queryContext({ limit: 1 });
    assert.strictEqual(check, 2);
    return true;
  } catch (e) {
    console.error('DB out of service!');
  }
  return false;
};

const connection = () => knexConnectionLog;

function get({ table, params = {} }) {
  return knexConnection(table).where(params);
}

const getByIds = table => ids => knexConnection(table).whereIn('id', ids);

function getOne({ table, params = {} }, context) {
  if (context) {
    if (table in context.loaders && params.id) {
      return context.loaders[table].load(params.id);
    }
  }
  return get({ table, params })
    .queryContext({ limit: 1 })
    .limit(1);
}

function getValue(value, isId) {
  return value && isId ? fromGlobalId(value).id : value;
}

function filter({ query, filtered }) {
  if (!filtered) {
    return;
  }
  query.where(function a() {
    filtered.forEach(_filter => {
      const where = _filter
        .map(({ id, upper = true, operator, isId }) => {
          const columns = id.split('&');
          if (columns.length > 1) {
            const concat = columns.map(column => `upper(${column})`).join(", ' ', ");
            return `concat(${concat}) LIKE upper(?)`;
          }
          if (!operator && !isId) {
            if (upper) {
              return `upper(${id}) LIKE upper(?)`;
            }
            return `${id} LIKE ?`;
          }
          return `${id} ${operator || '='} ?`;
        })
        .join(' AND ');
      this.orWhereRaw(
        where,
        _filter.map(({ value, exact, isId }) => (exact ? getValue(value, isId) : `%${getValue(value, isId)}%`)),
      );
    });
  });
}

function sort({ query, sorted }) {
  if (!sorted) {
    return;
  }
  const orderBy = sorted.map(({ id, desc }) => `${id} ${desc ? 'desc' : ''}`).join(', ');
  if (orderBy) {
    query.orderByRaw(orderBy);
  }
}

function filterSort({ query, args: { filtered, sorted } }) {
  filter({ query, filtered });
  sort({ query, sorted });
}

function put({ table, params, data }) {
  return knexConnection(table)
    .where(params)
    .update({ json_data: JSON.stringify(data) });
}

function upsert(params) {
  const { table, object, constraint } = params;
  const insert = knexConnection(table).insert(object);
  const update = knexConnection.queryBuilder().update(object);
  return knexConnection.raw(`? ON CONFLICT ${constraint} DO ? returning *`, [insert, update]);
}

const fromCamelToSnakeCase = (name, separator) =>
  name.replace(/([a-z]|(?:[A-Z0-9]+))([A-Z0-9]|$)/g, (_, $1, $2) => $1 + ($2 && (separator || '_') + $2)).toLowerCase();

const keysToSnakeCase = obj =>
  Object.keys(obj).reduce((acc, key) => ({ ...acc, [fromCamelToSnakeCase(key)]: obj[key] }), {});

const objToDb = obj => keysToSnakeCase(omit(obj, 'id'));

const disconnect = () => {
  knexConnection.destroy();
  knexConnectionLog.destroy();
};

export default {
  getByIds,
  checkConnection,
  connection,
  filter,
  filterSort,
  get,
  getOne,
  sort,
  put,
  upsert,
  knexConnection,
  fromCamelToSnakeCase,
  keysToSnakeCase,
  objToDb,
  disconnect,
};
