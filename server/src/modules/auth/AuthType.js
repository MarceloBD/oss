import { GraphQLBoolean, GraphQLObjectType } from 'graphql';
import get from 'lodash/get';

import UserType from '../user/UserType';
import { hasStaffPermission } from './Auth';

const getAuth = async (root, args, context) => {
  const id = get(context, 'user.id');
  if (id) {
    const user = await context.prisma.user({ id });
    return { user };
  }
  return { user: null };
};

const AuthType = new GraphQLObjectType({
  name: 'Auth',
  fields: {
    user: {
      type: UserType,
      resolve: auth => auth.user,
    },
    hasStaffPermission: {
      type: GraphQLBoolean,
      resolve: (root, args, context) => hasStaffPermission(context),
    },
  },
});

export default {
  type: AuthType,
  resolve: getAuth,
};
