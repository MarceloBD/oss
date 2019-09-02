export const isProduction = callback => {
  if (callback) {
    return (args, defaults) => (process.env.NODE_ENV === 'PRODUCTION' ? callback(args) : defaults);
  }
  return process.env.NODE_ENV === 'PRODUCTION';
};
