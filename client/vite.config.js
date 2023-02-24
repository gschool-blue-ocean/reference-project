export default {
  server: {
    proxy: {
      "/api": process.env.API_URL,
    },
    port: process.env.PORT
  },
  cacheDir: "../node_modules/.vite",
  test: {
    environment: "happy-dom",
    watch: false,
    cache: {
      dir: "../node_modules/.vitest"
    }
  },
};
