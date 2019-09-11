import bcrypt from 'bcrypt';
import { GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';

export const signUp = async ({ clientMutationId, email, password }, context) => {
  const payload = `${password}`;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(payload, salt);

  await context.photon.users.create({
    data: { email, password: hash },
  });
  return { clientMutationId };
};

export default mutationWithClientMutationId({
  name: 'SignUpMutation',
  inputFields: {
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
  },
  outputFields: {},
  mutateAndGetPayload: signUp,
});
