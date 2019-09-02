import { GraphQLBoolean, GraphQLString } from 'graphql';
import { connectionDefinitions } from 'graphql-relay';
import jwt from 'jwt-simple';
import moment from 'moment-timezone';

import { registerGraphQLNodeObjectType } from '../node/NodeType';

const EnrollmentType = registerGraphQLNodeObjectType('enrollment')({
  name: 'Enrollment',
  fields: () => ({
    active: {
      type: GraphQLBoolean,
      resolve: enrollment => enrollment.active,
    },
    lastAccess: {
      type: GraphQLString,
      resolve: enrollment => enrollment.lastAccess,
    },
    start: {
      type: GraphQLString,
      resolve: enrollment => moment(enrollment.start).format('DD/MM/YYYY'),
    },
    end: {
      type: GraphQLString,
      resolve: enrollment => moment(enrollment.end).format('DD/MM/YYYY'),
    },
    purchaseToken: {
      type: GraphQLString,
      resolve: async (enrollment, args, context) => {
        const { name, lastname, email, cpf, cellphone } = context.user;
        const { productId } = await context.prisma.enrollment({ id: enrollment.id }).course();

        const jwtToken = jwt.encode(
          {
            billing_first_name: name,
            billing_last_name: lastname,
            billing_email: email,
            billing_cpf: cpf,
            billing_phone: cellphone,
            product_id: productId,
          },
          process.env.JWT_SECRET,
        );
        return jwtToken;
      },
    },
    hasPayment: {
      type: GraphQLBoolean,
      resolve: async (enrollment, args, context) => {
        const enrollments = await context.prisma.enrollments({
          where: { id: enrollment.id, orders_some: { active: true } },
        });
        return enrollments.length > 0;
      },
    },
    trialPeriodEnded: {
      type: GraphQLBoolean,
      resolve: async (enrollment, args, context) => {
        const [activeOrders] = await context.prisma.enrollments({
          where: { id: enrollment.id, orders_some: { active: true } },
        });
        if (!activeOrders) {
          if (
            moment(enrollment.endTrial)
              .utc()
              .isBefore(moment().utc())
          ) {
            return true;
          }
        }
        return false;
      },
    },
    endTrial: {
      type: GraphQLString,
      resolve: enrollment => enrollment.endTrial,
    },
  }),
});

export const EnrollmentConnection = connectionDefinitions({
  name: 'Enrollment',
  nodeType: EnrollmentType,
});

export default EnrollmentType;
