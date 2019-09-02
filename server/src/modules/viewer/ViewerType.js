import { getUserOrThrow } from '../auth/Auth';
import UserType from '../user/UserType';

export default {
  type: UserType,
  resolve: (root, args, context) => getUserOrThrow(context),
};
