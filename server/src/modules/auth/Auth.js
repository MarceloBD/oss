import jwt from 'jwt-simple';
import passport from 'passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import photon from '../../utils/photon';

export const TOKEN_EXPIRATION_LIMIT_HOURS = 24;

const params = {
  secretOrKey: process.env.JWT_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

export const getUserOrThrow = context => {
  if (!context.user) {
    return null;
  }
  return context.user;
};

export const hasStaffPermission = async ({ user }) => {
  if (!user) {
    return false;
  }
  const [staff] = await prisma.staffs({ where: { user: { id: user.id } }, first: 1 });
  return Boolean(staff);
};

const desactivateOlderLogins = user =>
  prisma.updateManyLogins({ data: { active: false }, where: { active: true, user: { id: user.id } } });

export const createLogin = async user => {
  //  await desactivateOlderLogins(user);
  // console.log(photon.logins.findMany();
  const newLogin = await photon.logins.create({ data: { user: { connect: { id: user.id } } } });
  const payload = { id: newLogin.id };
  const jwtToken = jwt.encode(payload, process.env.JWT_SECRET);
  return { jwtToken, user };
};

export default () => {
  const strategy = new Strategy(params, (payload, done) => done(null, payload));
  passport.use(strategy);
  return {
    initialize: () => passport.initialize(),
    authenticate: () => (req, res, next) => {
      passport.authenticate('jwt', async (err, payload) => {
        if (err) {
          return next(err);
        }
        if (payload) {
          const [login] = await photon.logins.findMany({ where: { id: payload.id, active: true } });
          const user = await photon.logins.findOne({ where: { id: payload.id } }).user();
          if (login) {
            //  req.login = login;
            req.user = { ...user };
          }
        }
        return next();
      })(req, res, next);
    },
  };
};
