module.exports = {
  apps: [{
    name: 'tyange-blog',
    script: 'server/index.mjs',
    cwd: '/home/ubuntu/dev/deploy/tyange-blog',
    instances: 1,
    exec_mode: 'fork',
    env: {
      NODE_ENV: 'production',
      NITRO_PORT: 3000,
    },
    env_file: '.env',
    log_file: './logs/combined.log',
    out_file: './logs/out.log',
    error_file: './logs/error.log',
    time: true,
    merge_logs: true,
    max_memory_restart: '500M',
    watch: false,
    ignore_watch: [
      'node_modules',
      'logs',
      '.git',
    ],
    restart_delay: 1000,
    max_restarts: 5,
    min_uptime: '10s',
  }],
}
