---
to: ../server/src/modules/<%= module %>/mutations/<%= mutation.charAt(0).toUpperCase() + mutation.slice(1) %>Mutation.js
---
import { mutationWithClientMutationId } from 'graphql-relay';

export const <%= mutation.charAt(0).toLowerCase() + mutation.slice(1) %> = async (input, context) => {
};

export default mutationWithClientMutationId({
  name: '<%= mutation.charAt(0).toUpperCase() + mutation.slice(1) %>Mutation',
  inputFields: {},
  outputFields: {},
  mutateAndGetPayload: <%= mutation.charAt(0).toLowerCase() + mutation.slice(1) %>,
});
