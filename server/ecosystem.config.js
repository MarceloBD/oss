module.exports = {
  apps: [
    {
      name: 'phoenix',
      script: 'build/server.js',
      instances: 'max',
      exec_mode: 'cluster',
    },
  ],
};
