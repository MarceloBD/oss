import { GraphQLID } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import moment from 'moment-timezone';

import { fromGlobalToId } from '../../../utils/relay';
import EnrollmentType from '../EnrollmentType';

export const updateLastAccess = async (input, context) => ({
  enrollment: await context.prisma.updateEnrollment({
    data: { lastAccess: moment() },
    where: { id: fromGlobalToId(input.id) },
  }),
});

export default mutationWithClientMutationId({
  name: 'UpdateLastAccessMutation',
  description: 'Records the last enrollment accessed by the user',
  inputFields: {
    id: { type: GraphQLID },
  },
  outputFields: {
    enrollment: { type: EnrollmentType },
  },
  mutateAndGetPayload: updateLastAccess,
});
