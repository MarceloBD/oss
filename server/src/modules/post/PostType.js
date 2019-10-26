import { GraphQLInt, GraphQLBoolean, GraphQLString } from 'graphql';
import { connectionDefinitions, connectionFromArray } from 'graphql-relay';

import MaterialType, { TYPES } from '../material/MaterialType';
import { registerGraphQLNodeObjectType } from '../node/NodeType';
import connectionArgs from '../prisma/connectionArgs';

const PostType = registerGraphQLNodeObjectType('post')({
  name: 'Post',
  fields: () => ({
    material: {
      type: MaterialType,
      resolve: async (post, args, context) => context.photon.posts.findOne({ where: { id: post.id } }).material(),
    },
    votes: {
      type: GraphQLInt,
      resolve: async (post, args, context) => {
        const votes = await context.photon.posts.findOne({ where: { id: post.id } }).postVote();
        return votes.length;
      },
    },
    isVoted: {
      type: GraphQLBoolean,
      resolve: async (post, args, context) => {
        const votes = await context.photon.posts
          .findOne({ where: { id: post.id } })
          .postVote({ where: { user: { id: context.user.id } } });
        return Boolean(votes.length);
      },
    },
  }),
});

export const PostConnection = connectionDefinitions({
  name: 'Post',
  nodeType: PostType,
});

export const PostQuery = {
  type: PostConnection.connectionType,
  args: { type: { type: GraphQLString }, ...connectionArgs },
  resolve: async (root, args, context) => {
    let posts = [];
    if (args.type !== 'all') {
      if (args.type !== 'others') {
        posts = await context.photon.posts({ where: { material: { type: args.type.toUpperCase() } } });
      } else {
        posts = await context.photon.posts({
          where: { material: { NOT: Object.keys(TYPES).map(type => ({ type: type.toUpperCase() })) } },
        });
      }
    } else {
      posts = await context.photon.posts();
    }
    return connectionFromArray(posts, args);
  },
};

export default PostType;
