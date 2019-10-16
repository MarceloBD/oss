import { GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';

export const createNewPost = async ({ clientMutationId, title, description, language, url, type, hash }, context) => {
  await context.photon.posts.create({
    data: { material: { create: { name: title, description, language, url, type: type.toUpperCase(), hash } } },
  });
  return { clientMutationId };
};

export default mutationWithClientMutationId({
  name: 'CreateNewPostMutation',
  inputFields: {
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    language: { type: GraphQLString },
    url: { type: GraphQLString },
    type: { type: GraphQLString },

    hash: { type: GraphQLString },
  },
  outputFields: {},
  mutateAndGetPayload: createNewPost,
});
