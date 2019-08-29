export const getRootPath = path => {
  return path.match(/\/([a-z]*)[a-z/]*/i)[1];
};

export const getLastPath = path =>
  path
    .match(/\/([a-z]*)\//g)
    .slice(-1)[0]
    .split('/')[1];
