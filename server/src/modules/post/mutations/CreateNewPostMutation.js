import { GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';

export const createNewPost = async ({ clientMutationId, title, description }, context) => {
  await context.photon.posts.create({
    data: { material: { create: { name: title, description, type: 'test' } } },
  });
  return { clientMutationId };
};

export default mutationWithClientMutationId({
  name: 'CreateNewPostMutation',
  inputFields: {
    title: { type: GraphQLString },
    description: { type: GraphQLString },
  },
  outputFields: {},
  mutateAndGetPayload: createNewPost,
});
