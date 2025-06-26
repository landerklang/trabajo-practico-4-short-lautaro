import express from "express";
import "dotenv/config";
import characterouter from "./src/routes/character.routes.js";
import { sequelize } from "./src/config/database.js";
import { startOn } from "./src/config/database.js";
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(morgan("dev"));
sequelize.authenticate();

app.use("/api", characterouter);

app.listen(PORT, async () => {
  await startOn();
  console.log(`Escuchando con exito ${PORT}`);
});
