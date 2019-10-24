import { GraphQLObjectType } from 'graphql';

import ConstantType from '../constant/ConstantType';
import { PostQuery } from '../post/PostType';
import { UserQuery } from '../user/UserType';

const getSystem = async () => ({});

const GraphQLSystem = new GraphQLObjectType({
  name: 'System',
  fields: {
    users: UserQuery,
    posts: PostQuery,
    constants: { type: ConstantType, resolve: () => ({}) },
  },
});

export default {
  type: GraphQLSystem,
  resolve: getSystem,
};
