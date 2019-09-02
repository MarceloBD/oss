import { GraphQLObjectType } from 'graphql';

import AuthType from './auth/AuthType';
import NodeType from './node/NodeType';
import SystemType from './system/SystemType';
import ViewerType from './viewer/ViewerType';

export default new GraphQLObjectType({
  name: 'Query',
  fields: {
    auth: AuthType,
    viewer: ViewerType,
    node: NodeType,
    system: SystemType,
  },
});
