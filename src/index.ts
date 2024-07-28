import express, { json, urlencoded } from "express";

import { Logger } from "./middlewares/logger";
import { SpecificationDoc } from "./middlewares/swagger";
import { RegisterRoutes } from "../build/routes";

const app = express();

// Use body parser to read sent json payloads
app.use(
  urlencoded({
    extended: true,
  }),
);

app.use(json());

Logger(app);

SpecificationDoc(app);

RegisterRoutes(app);

const port = parseInt(process.env.PORT || "3000");

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
