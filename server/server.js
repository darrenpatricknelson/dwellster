import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import authRouter from './routes/auth.routes.js';
import communityRouter from './routes/community.routes.js';
import blogRouter from './routes/blog.routes.js';

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

// initial welcome
app.get('/', (req, res) => {
    res.json({
        message: 'Hello'
    });
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