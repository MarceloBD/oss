import bcrypt from 'bcrypt';
import { GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import moment from 'moment-timezone';

export const signUp = async ({ clientMutationId, name, email, document, cellphone, password }, context) => {
  const payload = `${password}`;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(payload, salt);

  console.log({ name, email, document, cellphone, password: hash });

  await context.photon.users.create({
    data: {
      name,
      email,
      document,
      cellphone,
      password: hash,
    },
  });
  return { clientMutationId };
};

export default mutationWithClientMutationId({
  name: 'SignUpMutation',
  inputFields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    document: { type: new GraphQLNonNull(GraphQLString) },
    cellphone: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
  },
  outputFields: {},
  mutateAndGetPayload: signUp,
});
