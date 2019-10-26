import { GraphQLBoolean } from 'graphql';

import { getUserOrThrow } from '../auth/Auth';
import UserType from '../user/UserType';

export default {
  type: UserType,
  args: { hasUser: { type: GraphQLBoolean }, hasStaff: { type: GraphQLBoolean } },
  resolve: async (root, args, context) => {
    const user = getUserOrThrow(context);
    if (!user) {
      if (args.hasUser) throw new Error('unauthenticated');
      return null;
    }

    if (args.hasStaff) {
      const [staff] = await context.photon.users.findOne({ where: { id: user.id } }).staff();
      if (!staff) {
        throw new Error('unauthorized');
      }
    }

    return user;
  },
};
