const SCHEMA_GRAPH = {
  user: {
    columns: ['name', 'cpf'],
    edges: ['material'],
  },
  material: {
    columns: ['title', 'type', 'user_id', 'version_id'],
    edges: ['user', 'version'],
  },
  version: {
    columns: ['name'],
    edges: ['material'],
  },
};

const DB_MOCK = {
  user: [
    { name: 'marcelo', cpf: '123' },
    { name: 'matheus', cpf: '444' },
    { name: 'carlos', cpf: '333' },
    { name: 'gustavo', cpf: '112' },
  ],
  material: [
    { title: 'material 1 teste', type: 'software', user_id: 1, version_id: 1 },
    { title: 'material 2 teste', type: 'hardware', user_id: 2, version_id: 2 },
    { title: 'material 3 teste', type: 'others', user_id: 3, version_id: 3 },
  ],
  version: [{ name: 'version 1' }, { name: 'version 2' }, { name: 'version 3' }],
};

const createTupleSet = (table, keywords) => {
  const data = DB_MOCK[table];
  const { columns } = SCHEMA_GRAPH[table];

  const tupleSet = [];
  data.map((tuple, idx) => {
    columns.map(column => {
      keywords.map(keyword => {
        if (`${tuple[column]}`.includes(keyword)) {
          tupleSet.push(idx);
        }
        return keyword;
      });
      return column;
    });
    return tuple;
  });
  return tupleSet;
};

const createFreeTupleSet = table => {
  const data = DB_MOCK[table];
  return Array.from(Array(data.length).keys());
};

const createSets = (tables, keywords) => {
  const tupleSets = [];
  tables.map(table => {
    const newTupleSet = createTupleSet(table, keywords);
    if (newTupleSet.length) {
      tupleSets.push([{ [table]: newTupleSet }]);
    }
  });
  tables.map(table => {
    tupleSets.push([{ [`${table}Free`]: createFreeTupleSet(table) }]);
  });
  return tupleSets;
};

export const generateAnswerGraph = query => {
  const tables = Object.keys(SCHEMA_GRAPH);
  const keywords = query.split(' ');
  const queue = createSets(tables, keywords).reverse();
  const answers = [];
  while (queue.length) {
    const answer = queue.pop();
    answers.push(answer);
    answer.map(tupleSetOrFree => {
      const tableName = Object.keys(tupleSetOrFree)[0].split('Free')[0];
      SCHEMA_GRAPH[tableName].edges.map(adjacentNode => {
        console.log(adjacentNode);
      });
    });
  }
};
