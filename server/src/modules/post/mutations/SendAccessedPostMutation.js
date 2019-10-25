import { GraphQLID } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';

import { fromGlobalToId } from '../../../utils/relay';

export const sendAccessedPost = async ({ clientMutationId, materialGlobalId }, context) => {
  const materialId = fromGlobalToId(materialGlobalId);
  const [post] = await context.photon.materials.findOne({ where: { id: materialId } }).post();
  await context.photon.posts.update({
    where: { id: post.id },
    data: { numberOfAccess: post.numberOfAccess + 1 },
  });

  return { clientMutationId };
};

export default mutationWithClientMutationId({
  name: 'SendAccessedPostMutation',
  inputFields: {
    materialGlobalId: { type: GraphQLID },
  },
  outputFields: {},
  mutateAndGetPayload: sendAccessedPost,
});
