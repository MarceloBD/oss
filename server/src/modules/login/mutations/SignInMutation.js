import { GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import bcrypt from 'bcrypt';

export const signIn = async ({ clientMutationId, email, password }, context) => {
  const [user] = await context.photon.users.findMany({ where: { email } });
  console.log(user);
  if (user && bcrypt.compareSync(password, user.password)) {
    return { clientMutationId };
  }
  throw new Error();
};

export default mutationWithClientMutationId({
  name: 'SignInMutation',
  inputFields: {
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
  },
  outputFields: {},
  mutateAndGetPayload: signIn,
});
