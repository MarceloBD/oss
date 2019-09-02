import bcrypt from 'bcrypt';
import { GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';

import UserType from '../../user/UserType';
import { createLogin } from '../Auth';

export const login = async ({ email, password }, context) => {
  const [user] = await context.prisma.users({ where: { email: email.toLowerCase(), active: true }, first: 1 });

  if (user && bcrypt.compareSync(password, user.password)) {
    return createLogin(user);
  }

  throw new Error();
};

export default mutationWithClientMutationId({
  name: 'LoginMutation',
  inputFields: {
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    jwtToken: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: payload => payload.jwtToken,
    },
    user: {
      type: UserType,
      resolve: payload => payload.user,
    },
  },
  mutateAndGetPayload: login,
});
