import express from "express";
import cors from "cors";
import morgan from "morgan";
import authRouter from "./src/routes/auth.route.js";
import projectRouter from "./src/routes/project.route.js";
import notFoundMiddleware from "./src/middlewares/not.found.middleware.js";
import errorMiddleware from "./src/middlewares/error.middleware.js";
import taskRouter from "./src/routes/task.route.js";
import statusRouter from "./src/routes/status.route.js";
import cookieParser from "cookie-parser";
import authenMiddleware from "./src/middlewares/authen.middleware.js";

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(cookieParser());
app.use(express.json());
app.use(morgan("dev"));

const PORT = 8000


app.use("/api/auth", authRouter);
app.use("/api/project", projectRouter);
app.use("/api/task", taskRouter);
app.use("/api/status", statusRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(8000, () => console.log(`Server is running on PORT ${PORT}`));