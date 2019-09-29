import get from 'lodash/get';

import JWTToken from '../../utils/JWTToken';

const checkLogin = ({ user, query = {} }) => {
  const isLogged = Boolean(get(user, 'id'));
  if (isLogged) {
    window.location = `${process.env.PORTAL_URL}/#${query.redirect && query.redirect !== '/' ? query.redirect : '/'}`;
    window.location.reload();
  }
};

const login = ({ jwtToken, user, query }) => {
  JWTToken.set(jwtToken);
  checkLogin({ user, query });
};

const logout = () => {
  JWTToken.destroy();
  window.location.assign('/#/login');
};

export default { checkLogin, login, logout };
