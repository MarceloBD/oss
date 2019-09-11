---
to: ../emptyRoom/src/modules/<%= module %>/mutations/<%= mutation.charAt(0).toUpperCase() + mutation.slice(1) %>Mutation.js
---
import { commitMutation, environment, graphql, deleteUpdater } from '../../../utils/relay';

const mutation = graphql`
  mutation <%= mutation.charAt(0).toUpperCase() + mutation.slice(1) %>Mutation($input: <%= mutation.charAt(0).toUpperCase() + mutation.slice(1) %>MutationInput!) {
    <%= mutation.charAt(0).toLowerCase() + mutation.slice(1) %>(input: $input) {
      <%= module %> {
        id
      }
    }
  }
`;

function commit({ variables, ...args }) {
  return commitMutation(environment, {
    mutation,
    variables: { input: variables },
    updater: store => {
      deleteUpdater({
        connectionName: '',
        nodeId: variables.id,
        parentId: null,
        store,
      });
    },
    ...args,
  });
}

export default { commit };
