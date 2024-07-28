import { Express } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../../build/swagger.json";

// Middelware function to serve swagger documentation at /api-docs
export function SpecificationDoc(app: Express) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}
