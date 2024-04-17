import express, { Router } from "express";
import dayModel from "../models/day";

const router: Router = express.Router();

router.get("/:id", async (req, res) => {
    try {
        const id: number = parseInt(req.params.id);
        const result = await dayModel.getAllDaysById(id);

        res.json(result);
    } catch (error: any | null) {
        res.status(500).send("Internal Server Error");
    }
});

router.post("/", async (req, res) => {
    try {
        const { response, id } = req.body;

        const result = await dayModel.addDay({ response: response, id: id });

        res.json(result);
    } catch (error: any | null) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});

export default router;
