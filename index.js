const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const { db } = require("./database/db.js");

const itemRoutes = require("./routes/routes.js");
const logRoutes = require("./routes/logroutes.js");

const { PORT } = require("./services/config.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/items", itemRoutes);
app.use("/log", logRoutes);

app.use("/", (req, res) => {
  res.status(404).send("la Sarten Negra - Resource not found");
});

app.listen(PORT, () => {
  console.log(`server runing on port:${PORT}`);
  db.sync({ alter: true });
});
