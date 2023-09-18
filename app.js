const app = require("./server");
const router = require("./router");

app.use("/", router);
