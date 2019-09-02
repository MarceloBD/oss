// eslint-disable-next-line max-len
const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const isEmail = email => EMAIL_REGEX.test(email);

export const isCpf = _cpf => {
  if (!_cpf) return false;
  const cpf = _cpf.replace(/[^\d]+/g, '');
  if (cpf === '') return false;
  // invalid known cpf
  if (cpf.length !== 11 || parseInt(cpf, 10) % 11111111111 === 0) {
    return false;
  }
  // first digit validation
  let add = 0;
  for (let i = 0; i < 9; i += 1) {
    add += parseInt(cpf.charAt(i), 10) * (10 - i);
  }
  let rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) {
    rev = 0;
  }
  if (rev !== parseInt(cpf.charAt(9), 10)) {
    return false;
  }
  // second digit validation
  add = 0;
  for (let i = 0; i < 10; i += 1) {
    add += parseInt(cpf.charAt(i), 10) * (11 - i);
  }
  rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) {
    rev = 0;
  }
  if (rev !== parseInt(cpf.charAt(10), 10)) {
    return false;
  }
  return true;
};
