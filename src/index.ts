import express from "express";
import healthCheckRouter from "./routes/heartbeat";

const app = express();

app.use("/heartbeat", healthCheckRouter);

const port = parseInt(process.env.PORT || "3000");
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
