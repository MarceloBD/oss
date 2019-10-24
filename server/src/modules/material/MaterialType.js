import { GraphQLString } from 'graphql';
import { connectionDefinitions, connectionFromArray } from 'graphql-relay';

import { registerGraphQLNodeObjectType } from '../node/NodeType';
import connectionArgs from '../prisma/connectionArgs';
import { UserConnection } from '../user/UserType';

export const TYPES = { software: 1, hardware: 2, teaching: 3, research_data: 4, artistic: 5, others: 6 };

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
    description: {
      type: GraphQLString,
      resolve: material => material.description,
    },
    language: {
      type: GraphQLString,
      resolve: material => material.language,
    },

    url: {
      type: GraphQLString,
      resolve: material => material.url,
    },
    authors: {
      type: UserConnection.connectionType,
      args: connectionArgs,
      resolve: async (material, args, context) => {
        const materialAuthors = await context.photon.materials.findOne({ where: { id: material.id } }).materialAuthor();
        const authors = [];
        // eslint-disable-next-line
        for (let idx in materialAuthors) {
          authors.push(context.photon.materialAuthors.findOne({ where: { id: materialAuthors[idx].id } }).author());
        }
        const users = [];
        // eslint-disable-next-line
        for (let idx in authors) {
          users.push(context.photon.authors.findOne({ where: { id: authors[idx].id } }).user());
        }

        return connectionFromArray(users, args);
      },
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
    const materials = await context.photon.materials();
    return connectionFromArray(materials, args);
  },
};

export default MaterialType;
