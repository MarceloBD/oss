import fs from 'fs';
import path from 'path';

import chalk from 'chalk';
import { buildClientSchema, introspectionQuery, printSchema } from 'graphql/utilities';
import fetch from 'node-fetch';

const jsonFile = path.join(__dirname, '../../../schema.json');
const graphQLFile = path.join(__dirname, '../../../schema.graphql');

fetch('http://localhost:8080/graphql', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ query: introspectionQuery }),
})
  .then(res => res.json())
  .then(res => {
    const schemaString = printSchema(buildClientSchema(res.data), { commentDescriptions: true });
    fs.writeFileSync(jsonFile, JSON.stringify(res, null, 2));
    fs.writeFileSync(graphQLFile, schemaString);
  })
  .catch(error => {
    if (error.code === 'ECONNREFUSED') {
      console.log(chalk.red('Connection error, run your API!'));
    } else {
      console.log(error);
    }
  });
