import { mutationWithClientMutationId } from 'graphql-relay';

export const logout = async ({ clientMutationId }, { prisma, login }) => {
  await prisma.updateLogin({ where: { id: login.id }, data: { active: false } });
  return { clientMutationId };
};

export default mutationWithClientMutationId({
  name: 'LogoutMutation',
  mutateAndGetPayload: logout,
});
