// imports 
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import authRouter from './routes/auth.routes.js';
import blogRouter from './routes/blog.routes.js';
import communityRouter from './routes/community.routes.js';

// configs
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config();

// deployment config
if (process.env.NODE_ENV !== 'production') {
    dotenv.config({ path: '/server/.env' });
}

// initialize
const app = express();

// middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
// the following middleware outputs information about the request in the terminal
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
// 3 routes created: 
// authRoute for authentication
// - This route works hand in hand with the user model and controller
app.use('/auth', authRouter);
// communityRouter
// - This route works hand in hand with the community model and controller
app.use('/community', communityRouter);
// blogRoute
// - This route works hand in hand with the blogs model and controller
app.use('/blog', blogRouter);


// connect to db
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        // listening on port
        const PORT = process.env.PORT;
        app.listen(PORT, () => {
            console.log(`Connected to DB and listening on port ${PORT}!`);
        });
    })
    .catch(error => {
        console.log(error);
    });

// static files (build of your frontend)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend', 'build')));
    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend', 'build', 'index.html'));
    });
}