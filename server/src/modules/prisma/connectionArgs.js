import { GraphQLInt, GraphQLString } from 'graphql';

export default {
  skip: { type: GraphQLInt },
  after: { type: GraphQLString },
  before: { type: GraphQLString },
  first: { type: GraphQLInt },
  last: { type: GraphQLInt },
};
