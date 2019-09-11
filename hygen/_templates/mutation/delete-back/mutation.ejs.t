---
to: ../phoenix/src/modules/<%= module %>/mutations/<%= mutation.charAt(0).toUpperCase() + mutation.slice(1) %>Mutation.js
---
import { GraphQLID, GraphQLNonNull } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';

import { fromGlobalToId } from '../../../utils/relay';
import <%= module.charAt(0).toUpperCase() + module.slice(1) %>Type from '../<%= module.charAt(0).toUpperCase() + module.slice(1) %>Type';

export const <%= mutation.charAt(0).toLowerCase() + mutation.slice(1) %> = async ({ clientMutationId, id: globalId }, context) => {
  const id = fromGlobalToId(globalId);
  const <%= module %> = await context.prisma.delete<%= module.charAt(0).toUpperCase() + module.slice(1) %>({ id });
  return { clientMutationId, <%= module %> };
};

export default mutationWithClientMutationId({
  name: '<%= mutation.charAt(0).toUpperCase() + mutation.slice(1) %>Mutation',
  inputFields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  outputFields: {
    <%= module %>: { type: new GraphQLNonNull(<%= module.charAt(0).toUpperCase() + module.slice(1) %>Type) },
  },
  mutateAndGetPayload: <%= mutation.charAt(0).toLowerCase() + mutation.slice(1) %>,
});
