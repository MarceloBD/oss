import { GraphQLBoolean, GraphQLString } from 'graphql';
import { connectionDefinitions, connectionFromArray } from 'graphql-relay';

import { registerGraphQLNodeObjectType } from '../node/NodeType';
import connectionArgs from '../prisma/connectionArgs';

const MaterialType = registerGraphQLNodeObjectType('material')({
  name: 'Material',
  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: material => material.name,
    },

    type: {
      type: GraphQLString,
      resolve: material => material.type,
    },
  }),
});

export const MaterialConnection = connectionDefinitions({
  name: 'Material',
  nodeType: MaterialType,
});

export const MaterialQuery = {
  type: MaterialConnection.connectionType,
  args: connectionArgs,
  resolve: async (root, args, context) => {
    const Materials = await context.photon.materials();
    return connectionFromArray(Materials, args);
  },
};

export default MaterialType;
