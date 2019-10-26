import { commitMutation, environment, graphql } from '../../../utils/relay';

const mutation = graphql`
  mutation VoteMutation($input: VoteMutationInput!) {
    vote(input: $input) {
      clientMutationId
      post {
        votes
        isVoted
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
