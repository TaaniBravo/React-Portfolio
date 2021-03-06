const path = require("path");

const routes = app => {
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
};

module.exports = routes;
