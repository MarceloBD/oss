import { GraphQLInt, GraphQLString } from 'graphql';

export default {
  where: { type: GraphQLString },
  orderBy: { type: GraphQLString },
  skip: { type: GraphQLInt },
  after: { type: GraphQLString },
  before: { type: GraphQLString },
  first: { type: GraphQLInt },
  last: { type: GraphQLInt },
};
