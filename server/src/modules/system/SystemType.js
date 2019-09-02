import { GraphQLObjectType } from 'graphql';

import { hasStaffPermission } from '../auth/Auth';
import { UserQuery } from '../user/UserType';

const getSystem = async (root, args, context) => {
  if (await hasStaffPermission(context)) {
    return {};
  }
  throw Error('unauthorized');
};

const GraphQLSystem = new GraphQLObjectType({
  name: 'System',
  fields: {
    users: UserQuery,
  },
});

export default {
  type: GraphQLSystem,
  resolve: getSystem,
};
