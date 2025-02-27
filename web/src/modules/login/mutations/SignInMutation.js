import { commitMutation, environment, graphql } from '../../../utils/relay';

const mutation = graphql`
  mutation SignInMutation($input: SignInMutationInput!) {
    signIn(input: $input) {
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
