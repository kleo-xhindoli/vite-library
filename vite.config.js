// vite.config.js
const path = require("path");

module.exports = {
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/index.ts"),
      name: "vite-library",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react", "react-dom"],
    },
  },
};
