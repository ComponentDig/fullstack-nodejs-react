import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
// import poemRoutes from './routes/poem';

// Konfigurera miljövariabler
process.loadEnvFile(".env");

// Skapa Express-applikationen
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.json({ message: "Hello from poem app!" });
})

// Importera routes
// const poemRoutes = require('./routes/poem');

// Använd routes
// app.use('/api/poem', poemRoutes);

// Anslut till MongoDB och starta servern
const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => console.log(`Servern körs på port ${PORT}`));
    })
    .catch((error) => console.error(error));