import get from 'lodash/get';

import JWTToken from '../../utils/JWTToken';

const checkLogin = ({ user, query = {} }) => {
  const isLogged = Boolean(get(user, 'id'));
  if (isLogged) {
    window.location.assign(
      `${process.env.PORTAL_URL}/#${query.redirect && query.redirect !== '/' ? query.redirect : '/'}`,
    );
  }
  window.location.reload(true);
};

const login = ({ jwtToken, user, query }) => {
  JWTToken.set(jwtToken);
  checkLogin({ user, query });
};

const logout = () => {
  JWTToken.destroy();
  window.location.reload(true);
};

export default { checkLogin, login, logout };
