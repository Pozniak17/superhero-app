import "dotenv/config";
import express from "express";
import cors from "cors";

import "./db.js";
import router from "./routes/index.js";

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(router);

app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send("Internal Server Error");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
