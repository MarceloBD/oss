import { lstatSync, readdirSync } from 'fs';
import { join } from 'path';

import { GraphQLObjectType } from 'graphql';

const isDirectory = source => {
  try {
    return lstatSync(source).isDirectory();
  } catch (err) {
    return false;
  }
};
const getDirectories = () =>
  readdirSync(__dirname)
    .map(name => join(join(__dirname, name), 'mutations'))
    .filter(isDirectory);
const mutationPaths = getDirectories();
const mutations = mutationPaths.reduce(
  (acc, path) => [
    ...acc,
    ...readdirSync(path)
      .filter(name => !name.includes('.js.map'))
      .map(name => join(path, name))
      .map(mutation => [
        mutation.split('.')[0].slice(mutation.lastIndexOf('/') + 1),
        // eslint-disable-next-line global-require, import/no-dynamic-require
        require(mutation.replace(__dirname, '.')),
      ]),
  ],
  [],
);
const normalizeMutationName = string => {
  const mutationName = string.replace('Mutation', '');
  return mutationName.charAt(0).toLowerCase() + mutationName.slice(1);
};

const Mutations = mutations.reduce((acc, mutation) => {
  const [name, field] = mutation;
  return {
    ...acc,
    [normalizeMutationName(name)]: field.default,
  };
}, {});

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: Mutations,
});
