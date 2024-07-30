import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import DB from './database/db.js';

dotenv.config({
    path: './.env',
});

const app = express();
app.use(express.json());

DB(); // Database connection

const corsConfig = {
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
};

app.use(cors(corsConfig));

app.get('/', (req, res) => {
    res.send('Welcome to BorrowBridge Backend');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});