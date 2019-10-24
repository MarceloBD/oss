import { GraphQLBoolean } from 'graphql';

import { getUserOrThrow } from '../auth/Auth';
import UserType from '../user/UserType';

export default {
  type: UserType,
  args: { hasUser: { type: GraphQLBoolean } },
  resolve: (root, args, context) => {
    const user = getUserOrThrow(context);
    if (!user) {
      if (args.hasUser) throw new Error('unauthenticated');
      return null;
    }
    return user;
  },
};
