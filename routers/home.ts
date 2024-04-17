import express, { Router } from "express";
import streakAndDayModel from "../models/streak_and_day";
import streakModel from "../models/streak";

const router: Router = express.Router();

router.get("/:id", async (req, res) => {
    try {
        const id: number = parseInt(req.params.id);
        const result:
            | {
                  id: number;
                  response: string;
                  date: string;
                  count: number;
                  name: string;
              }[]
            | any = await streakAndDayModel.getUserAllDataById(id);

        res.render("user/index", { user: result, title: result[0].name });
    } catch (error: any | null) {
        res.status(500).send("Internal Server Error");
    }
});

router.get("/", async (req, res) => {
    try {
        const result = await streakModel.getAllStreaks();

        res.render("index", { users: result });
    } catch {
        res.status(500).send("Internal Server Error");
    }
});

export default router;
