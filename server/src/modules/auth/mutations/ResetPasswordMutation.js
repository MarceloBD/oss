import bcrypt from 'bcrypt';
import { GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import moment from 'moment-timezone';

import UserType from '../../user/UserType';
import { TOKEN_EXPIRATION_LIMIT_HOURS } from '../Auth';
import { login } from './LoginMutation';

const desactivateRecoverPassword = ({ prisma, recoverPassword }) =>
  prisma.updateRecoverPassword({ where: { id: recoverPassword.id }, data: { active: false } });

const updateUserPassword = ({ prisma, user, password }) => {
  const salt = bcrypt.genSaltSync(10);
  const encryptedPassword = bcrypt.hashSync(password, salt);
  return prisma.updateUser({ where: { id: user.id }, data: { password: encryptedPassword } });
};

const checkExpirationDate = recoverPassword => {
  const expirationDate = moment(recoverPassword.createdAt).add(TOKEN_EXPIRATION_LIMIT_HOURS, 'hours');
  return expirationDate.isAfter(moment());
};

export const resetPassword = async ({ token, password }, context) => {
  const [recoverPassword] = await context.prisma.recoverPasswords({ where: { token, active: true } });

  if (recoverPassword && checkExpirationDate(recoverPassword)) {
    const user = await context.prisma.recoverPassword({ id: recoverPassword.id }).user();
    if (user) {
      await desactivateRecoverPassword({ prisma: context.prisma, recoverPassword });
      await updateUserPassword({ prisma: context.prisma, user, password });

      return login({ email: user.email, password }, context);
    }
  }
  throw new Error();
};

export default mutationWithClientMutationId({
  name: 'ResetPasswordMutation',
  inputFields: {
    token: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    jwtToken: { type: new GraphQLNonNull(GraphQLString) },
    user: { type: new GraphQLNonNull(UserType) },
  },
  mutateAndGetPayload: resetPassword,
});
