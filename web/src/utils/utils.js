import _get from 'lodash/get';

export const get = (object, path, _default) => {
  const result = _get(object, path, null);
  if (result !== null) {
    return result;
  }

  return _default;
};
