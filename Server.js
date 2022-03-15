const express = require("express");
const PORT = 3040;
const app = express();
require("./config/db");
const routePath = require("./Controller/Router");
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Server is up and RUNNING");
});

app.use("/api", routePath);

app.listen(PORT, () => {
  console.log(`Server is ready to listen to ${PORT}`);
});
