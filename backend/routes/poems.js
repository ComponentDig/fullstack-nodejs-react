import express from 'express';
import Poem from '../models/Poem';
const router = express.Router();

// Hämta alla dikter
router.get('/', async (req, res) => {
    try {
        const poems = await Poem.find().sort({ createdAt: -1 });
        res.json(poems);
    } catch (error) {
        res.status(500).json({ message: 'Serverfel' });
    }
});

// Skapa en ny dikt
router.post('/', async (req, res) => {
    const { title, content } = req.body;
    try {
        const poem = new Poem({ title, content });
        await poem.save();
        res.status(201).json(poem);
    } catch (error) {
        res.status(400).json({ message: 'Invalid data' });
    }
});

export default router;