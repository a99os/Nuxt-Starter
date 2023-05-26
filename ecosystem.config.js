module.exports = {
  apps: [
    {
      name: "Nuxt-Starter",
      port: "80",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
    },
  ],
};
