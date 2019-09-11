import { GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import bcrypt from 'bcrypt';

export const signIn = async ({ clientMutationId, email, password }, context) => {
  const user = await context.photon.users.findOne({ where: { email } });
  console.log(user && bcrypt.compareSync(password, user.password));
  return { clientMutationId };
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
