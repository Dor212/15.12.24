import { Router } from "express";
import User from "../models/User.schema.js"

const router = Router();

router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        return res.json(users);
    } catch (err) {
        return res.status(500).send(err.message)
    }
});

router.post("/", async (req, res) => {
    try {
        const data = req.body;
        const newUser = new User(data);
        await newUser.save();
        return res.json(newUser);
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        return res.json(user);
    } catch (err) {
        return res.status(500).send(err.message)
    }
});


router.delete("/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        return res.json(user);
    } catch (err) {
        return res.status(500).send(err.message)
    }
});

router.put("/:id", async (req, res) => {
    try {
        const data = req.body;
        const user = await User.findByIdAndUpdate(req.params.id, data);
        return res.json(data);
    } catch (err) {
        return res.status(500).send(err.message)
    }
});


export default router;