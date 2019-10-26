import { GraphQLID } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';

import { fromGlobalToId } from '../../../utils/relay';
import PostType from '../../post/PostType';

export const vote = async ({ clientMutationId, materialGlobalId }, context) => {
  const materialId = fromGlobalToId(materialGlobalId);
  const [post] = await context.photon.materials.findOne({ where: { id: materialId } }).post();

  await context.photon.postVotes.create({
    data: { post: { connect: { id: post.id } }, user: { connect: { id: context.user.id } } },
  });

  return { clientMutationId, post };
};

export default mutationWithClientMutationId({
  name: 'VoteMutation',
  inputFields: {
    materialGlobalId: { type: GraphQLID },
  },
  outputFields: {
    post: { type: PostType },
  },
  mutateAndGetPayload: vote,
});
