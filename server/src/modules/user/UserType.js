import { GraphQLBoolean, GraphQLString } from 'graphql';
import { connectionDefinitions, connectionFromArray } from 'graphql-relay';

import { getCurrentEnrollment } from '../enrollment/Enrollment';
import EnrollmentType, { EnrollmentConnection } from '../enrollment/EnrollmentType';
import { registerGraphQLNodeObjectType } from '../node/NodeType';
import { PostConnection } from '../post/PostType';
import connectionArgs from '../prisma/connectionArgs';
import FilterSortArgs from '../prisma/FilterSortArgs';

const UserType = registerGraphQLNodeObjectType('user')({
  name: 'User',
  fields: () => ({
    email: {
      type: GraphQLString,
      resolve: user => user.email,
    },
    cpf: {
      type: GraphQLString,
      resolve: user => user.cpf,
    },
    password: {
      type: GraphQLString,
      resolve: user => user.password,
    },
    name: {
      type: GraphQLString,
      resolve: user => user.name,
    },
    lastname: {
      type: GraphQLString,
      resolve: user => user.lastname,
    },
    cellphone: {
      type: GraphQLString,
      resolve: user => user.cellphone,
    },
    otherphone: {
      type: GraphQLString,
      resolve: user => user.otherphone,
    },
    fullname: {
      type: GraphQLString,
      resolve: user => `${user.name} ${user.lastname}`,
    },
    enrollments: {
      type: EnrollmentConnection.connectionType,
      args: FilterSortArgs,
      resolve: (user, args, context) =>
        context.prisma.enrollmentsConnection({ where: { user: { id: user.id }, active: true }, ...args }),
    },
    posts: {
      type: PostConnection.connectionType,
      resolve: (user, args, context) => {
        console.log('here');
        console.log(context.photon);
      },
    },

    currentEnrollment: {
      type: EnrollmentType,
      resolve: async (user, args, context) => {
        const [enrollment] = await getCurrentEnrollment(context);
        if (!enrollment) {
          throw Error('no_enrollment');
        }

        return enrollment;
      },
    },

    isImpersonated: {
      type: GraphQLBoolean,
      resolve: (user, args, context) => context.user.isImpersonated,
    },
  }),
});

export const UserConnection = connectionDefinitions({
  name: 'User',
  nodeType: UserType,
});

export const UserQuery = {
  type: UserConnection.connectionType,
  args: connectionArgs,
  resolve: async (root, args, context) => {
    const users = await context.prisma.users();
    return connectionFromArray(users, args);
  },
};

export default UserType;
