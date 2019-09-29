import { commitMutation, environment, graphql } from '../../../utils/relay';

const mutation = graphql`
  mutation LoginMutation($input: LoginMutationInput!) {
    login(input: $input) {
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
