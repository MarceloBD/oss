import UserType from '../user/UserType';

export default {
  type: UserType,
  resolve: async (root, args, context) => {
    console.log(await context.photon.users.findOne({ where: { id: 1 } }));
  },
};
