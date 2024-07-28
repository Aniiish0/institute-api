import { Request, Response, NextFunction, Express } from "express";
import morgan from "morgan";
import { v4 as uuidv4 } from "uuid";

interface RequestWithId extends Request {
  id?: string;
}

morgan.token("id", function getId(req: RequestWithId) {
  return req.id;
});

morgan.token("body", function (req: RequestWithId, _res: Response) {
  return req.body ? JSON.stringify(req.body) : "";
});

morgan.token("response-body", function (_req: RequestWithId, res: Response) {
  return res.locals.body ? JSON.stringify(res.locals.body) : "";
});

// Middleware function to set request id
function assignId(req: RequestWithId, _res: Response, next: NextFunction) {
  req.id = uuidv4();
  next();
}

// Middleware function to capture response body
function captureResponse(
  _req: RequestWithId,
  res: Response,
  next: NextFunction,
) {
  const originalSend = res.send;
  res.send = function (body: any) {
    res.locals.body = body; // Store response body in res.locals
    return originalSend.call(this, body);
  };
  next();
}

export function Logger(app: Express) {
  app.use(assignId);
  app.use(captureResponse);
  // TODO: send logs to a log service
  app.use(
    morgan(":id | :method | :url | :body | :response-body | :response-time ms"),
  );
}
