---
to: ../phoenix/src/modules/<%= module %>/<%= input.charAt(0).toUpperCase() + input.slice(1) %>MutationInput.js
---

import { GraphQLInputObjectType, GraphQLID, GraphQLString } from 'graphql';

export default new GraphQLInputObjectType({
  name: '<%= input.charAt(0).toUpperCase() + input.slice(1) %>MutationInput',
  fields: () => ({
    fieldName: { type: GraphQLType },
  }),
});