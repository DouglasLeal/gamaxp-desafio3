import express from "express";

import routes from "./routes/index.js";
import HandleErrorMiddleware from "./middlewares/HandleErrorMiddleware.js";

const app = express();

routes(app);

app.use(HandleErrorMiddleware.handle);

export default app;