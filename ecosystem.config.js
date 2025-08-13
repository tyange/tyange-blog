module.exports = {
  apps: [{
    name: 'tyange-blog',
    script: '.output/server/index.mjs',
    cwd: '/home/tyange/dev/deploy/tyange-blog',
    instances: 1,
    exec_mode: 'fork',
    env: {
      NODE_ENV: 'production',
      NITRO_PORT: process.env.NITRO_PORT || 3000,
      NUXT_PUBLIC_TYANGE_CMS_API_BASE: process.env.NUXT_PUBLIC_TYANGE_CMS_API_BASE,
    },
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
