const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log("server listening on port: " + PORT);
});

module.exports = app;
