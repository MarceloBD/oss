import { GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId, toGlobalId } from 'graphql-relay';
import get from 'lodash/get';
import moment from 'moment-timezone';

import { updateLastAccess } from '../../enrollment/mutations/UpdateLastAccessMutation';
import UserType from '../../user/UserType';
import { createLogin } from '../Auth';

export const loginTokenMutation = async ({ token }, context) => {
  const [loginToken] = await context.prisma
    .loginTokens({ where: { token, expirationDate_gte: moment(), active: true } })
    .enrollment();

  const enrollment = get(loginToken, 'enrollment');

  if (enrollment) {
    const user = await context.prisma.enrollment({ id: enrollment.id }).user();
    if (user) {
      await updateLastAccess({ id: toGlobalId('enrollment', enrollment.id) }, context);
      return createLogin(user);
    }
  }
  throw new Error();
};

export default mutationWithClientMutationId({
  name: 'LoginTokenMutation',
  inputFields: {
    token: { type: new GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    jwtToken: { type: new GraphQLNonNull(GraphQLString) },
    user: { type: new GraphQLNonNull(UserType) },
  },
  mutateAndGetPayload: loginTokenMutation,
});
