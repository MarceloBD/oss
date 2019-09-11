---
to: ../emptyRoom/src/modules/<%= module %>/mutations/<%= mutation.charAt(0).toUpperCase() + mutation.slice(1) %>Mutation.js
---
import { commitMutation, environment, graphql } from '../../../utils/relay';

const mutation = graphql`
  mutation <%= mutation.charAt(0).toUpperCase() + mutation.slice(1) %>Mutation($input: <%= mutation.charAt(0).toUpperCase() + mutation.slice(1) %>MutationInput!) {
    <%= mutation.charAt(0).toLowerCase() + mutation.slice(1) %>(input: $input) {}
  }
`;

function commit({ variables, ...args }) {
  return commitMutation(environment, {
    mutation,
    variables: { input: variables },
    ...args,
  });
}

export default { commit };
