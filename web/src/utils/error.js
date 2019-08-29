export const checkError = (errors, name) => {
  return errors.filter(error => error.message === name).length > 0;
};

export const checkErrorOnArray = (errors, names) => {
  let foundError = false;
  if (Array.isArray(errors)) {
    errors.forEach(error => {
      foundError = names.includes(error.message);
    });
  }
  return foundError;
};
