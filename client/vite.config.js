export default {
  root: "src",
  server: {
    proxy: {
      "/api": process.env.API_URL,
    },
    port: process.env.PORT,
  },
  cacheDir: "../node_modules/.vite",
  test: {
    environment: "jsdom",
    watch: false,
    cache: {
      dir: "../node_modules/.vitest",
    },
  },
};
