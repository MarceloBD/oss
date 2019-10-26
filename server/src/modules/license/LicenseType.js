import { GraphQLString } from 'graphql';

import { registerGraphQLNodeObjectType } from '../node/NodeType';

const LicenseType = registerGraphQLNodeObjectType('license')({
  name: 'License',
  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: licence => licence.name,
    },
    version: {
      type: GraphQLString,
      resolve: licence => licence.version,
    },
  }),
});

export default LicenseType;
