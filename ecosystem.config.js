module.exports = {
  apps: [
    {
      name: "API",
      script: "./build/app.js",
      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      args: "one two",
      instances: 1,
      autorestart: true,
      watch: true,
      max_memory_restart: "1G",
      ignore_watch: ["node_modules", "build/uploads"],
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ],

  deploy: {
    production: {
      user: "nolec",
      host: "172.30.1.4",
      ref: "origin/master",
      repo: "git@github.com:repo.git",
      path: "/var/www/production",
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production"
    }
  }
};
