import Cookies from 'universal-cookie';

const AuthorizationHeader = 'Authorization';

class JWTToken {
  static set = token =>
    new Cookies().set(AuthorizationHeader, `Bearer ${token}`, { path: '/', domain: process.env.DOMAIN });

  static get = () => decodeURIComponent(new Cookies().get(AuthorizationHeader) || '');

  static destroy = () => new Cookies().remove(AuthorizationHeader, { path: '/', domain: process.env.DOMAIN });
}

export default JWTToken;
