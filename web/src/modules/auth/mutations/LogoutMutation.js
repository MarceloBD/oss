import { commitMutation, environment, graphql } from '../../../utils/relay';

const mutation = graphql`
  mutation LogoutMutation($input: LogoutMutationInput!) {
    logout(input: $input) {
      clientMutationId
    }
  }
`;

function commit({ ...args }) {
  return commitMutation(environment, {
    mutation,
    variables: { input: {} },
    ...args,
  });
}

export default { commit };
