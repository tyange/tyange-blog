module.exports = {
  apps: [{
    name: 'tyange-blog',
    script: '.output/server/index.mjs',
    instances: 1,
    exec_mode: 'fork',
    env: {
      NODE_ENV: 'production',
      NITRO_PORT: 3000,
      NITRO_HOST: '0.0.0.0',
      NUXT_PUBLIC_TYANGE_CMS_API_BASE: 'http://localhost:8080',
    },
    time: true,
    merge_logs: true,
    max_memory_restart: '500M',
    watch: false,
    ignore_watch: [
      'node_modules',
      'logs',
      '.git',
    ],
    restart_delay: 0,
    max_restarts: 10,
    min_uptime: '5s',
    autorestart: true,
  }],
}
