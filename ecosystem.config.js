module.exports = {
  apps: [
    {
      name: 'api',
      cwd: 'current',
      script: 'node_modules/.bin/rw',
      args: 'serve api',
      instances: 'max',
      exec_mode: 'cluster',
      wait_ready: true,
      listen_timeout: 10000,
    },
    {
      name: 'fe',
      cwd: 'current/web',
      script: 'yarn',
      args: 'rw-serve-fe',
      instances: 'max',
      exec_mode: 'cluster',
      wait_ready: true,
      listen_timeout: 10000,
    },
  ],
}
