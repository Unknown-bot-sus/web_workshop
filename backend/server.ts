import express from "express";
import cors from "cors";
import path from "path";
import { PORT } from "./constant";

// middlewares

// routes
import { todoRouter } from "./routes"
import { notFound } from "./middleware";


const app = express();

app.use(cors());
app.use(express.static(path.join(process.cwd(), "public")));
app.use(express.json());

app.use("/api/v1/todos", todoRouter);

app.use(notFound);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})