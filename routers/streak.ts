import express, { Router } from "express";
import streakModel from "../models/streak";

const router: Router = express.Router();

router.get("/", async (req, res) => {
    try {
        const result = await streakModel.getAllStreaks();

        res.json(result);
    } catch (error: any | null) {
        res.status(500).send(error.message);
    }
});

router.post("/", async (req, res) => {
    try {
        const name: string = req.body.name;
        const result = await streakModel.addStreak(name);

        res.json(result);
    } catch (error: any | null) {
        res.status(500).send(error.message);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const result = await streakModel.getStreakById(parseInt(req.params.id));

        res.json(result);
    } catch (error: any | null) {
        res.status(500).send(error.message);
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const id: number = parseInt(req.params.id);
        const result = await streakModel.incrementStreak(id);

        res.json(result);
    } catch (error: any | null) {
        res.status(500).send(error.message);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const id: number = parseInt(req.params.id);
        const result = await streakModel.deleteStreak(id);

        res.json(result);
    } catch (error: any | null) {
        res.status(500).send(error.message);
    }
});

export default router;
