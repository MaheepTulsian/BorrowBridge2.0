import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import DB from './database/db.js';
//Routes
import authRoutes from './routes/auth.js';

dotenv.config({
    path: './.env',
});

const app = express();
app.use(cookieParser());
app.use(express.json());

DB(); // Database connection

const corsConfig = {
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
};

app.use(cors(corsConfig));

app.get('/', (req, res) => {
    res.send('Welcome to BorrowBridge Backend');
});

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});