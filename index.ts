import express, { Application } from "express";
import { createTables, dropTables } from "./config/default";
import streakRouter from "./routers/streak";
import dayRouter from "./routers/day";
import streakAndDayRouter from "./routers/home";

const app: Application = express();
const PORT: number = 3000;

// setting middlewares
app.use(express.json());

// setting template engine
app.set("view engine", "ejs");

// setting routers
app.use("/streak", streakRouter);
app.use("/day", dayRouter);
app.use("/", streakAndDayRouter);

// starting server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    createTables();
    // dropTables();
});
