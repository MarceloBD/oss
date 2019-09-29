import { commitMutation, environment, graphql } from '../../../utils/relay';

const mutation = graphql`
  mutation LoginTokenMutation($input: LoginTokenMutationInput!) {
    loginToken(input: $input) {
      jwtToken
      user {
        id
      }
    }
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
