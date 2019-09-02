const toCamel = string =>
  string.replace(/([-_][a-z])/gi, token =>
    token
      .toUpperCase()
      .replace('-', '')
      .replace('_', ''),
  );
const isArray = array => Array.isArray(array);
const isObject = object => object === Object(object) && !isArray(object) && typeof object !== 'function';

export const keysToCamel = object => {
  if (isObject(object)) {
    const newObject = {};
    Object.keys(object).forEach(key => {
      newObject[toCamel(key)] = keysToCamel(object[key]);
    });
    return newObject;
  }
  if (isArray(object)) {
    return object.map(i => keysToCamel(i));
  }
  return object;
};
