import { GraphQLInt, GraphQLNonNull, GraphQLObjectType } from 'graphql';

export default {
  aggregate: {
    type: new GraphQLNonNull(
      new GraphQLObjectType({
        name: 'Aggregate',
        fields: {
          count: {
            type: new GraphQLNonNull(GraphQLInt),
            resolve: obj => obj.count,
          },
        },
      }),
    ),
  },
};
