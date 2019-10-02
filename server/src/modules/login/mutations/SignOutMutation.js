import { mutationWithClientMutationId } from 'graphql-relay';

export const signOut = async ({ clientMutationId }, context) => {
  await context.photon.logins.update({ where: { id: context.login.id }, data: { active: false } });

  return { clientMutationId };
};

export default mutationWithClientMutationId({
  name: 'SignOutMutation',
  inputFields: {},
  outputFields: {},
  mutateAndGetPayload: signOut,
});
