import { GraphQLSchema } from 'graphql';

import MutationType from './MutationType';
import { registeredTypes } from './node/NodeType';
import QueryType from './QueryType';

export default new GraphQLSchema({
  types: Object.values(registeredTypes),
  mutation: MutationType,
  query: QueryType,
});
