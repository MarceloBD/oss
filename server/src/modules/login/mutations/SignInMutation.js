import bcrypt from 'bcrypt';
import { GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';

import { createLogin } from '../../auth/Auth';
import UserType from '../../user/UserType';

export const signIn = async ({ email, password }, context) => {
  const [user] = await context.photon.users.findMany({ where: { email } });
  if (user && bcrypt.compareSync(password, user.password)) {
    console.log(user);
    return createLogin(user);
  }
  throw new Error();
};

export default mutationWithClientMutationId({
  name: 'SignInMutation',
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
  mutateAndGetPayload: signIn,
});
