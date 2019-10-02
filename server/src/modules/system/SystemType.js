import { GraphQLObjectType } from 'graphql';

import { hasStaffPermission } from '../auth/Auth';
import { PostQuery } from '../post/PostType';
import { UserQuery } from '../user/UserType';

const getSystem = async (root, args, context) => {
  return {};
};

const GraphQLSystem = new GraphQLObjectType({
  name: 'System',
  fields: {
    users: UserQuery,
    posts: PostQuery,
  },
});

export default {
  type: GraphQLSystem,
  resolve: getSystem,
};
