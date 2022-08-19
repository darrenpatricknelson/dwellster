// imports 
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import authRouter from './routes/auth.routes.js';
import blogRouter from './routes/blog.routes.js';
import communityRouter from './routes/community.routes.js';

// configs
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// deployment config
if (process.env.NODE_ENV !== 'production') {
    dotenv.config({ path: __dirname + '/.env' });
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

const PORT = process.env.PORT || 3001;
// connect to db
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        // listening on port
        app.listen(PORT, () => {
            console.log(`Connected to DB and listening on port ${PORT}!`);
        });
    })
    .catch(error => {
        console.log(error);
    });

// routes
// 3 routes created: 
// authRoute for authentication
// - This route works hand in hand with the user model and controller
// app.use('/auth', path.join(__dirname, 'routes', 'auth.routes.js'));
app.use('/api/auth', authRouter);
// communityRouter
// - This route works hand in hand with the community model and controller
// app.use('/community', path.join(__dirname, 'routes', 'community.routes.js'));
app.use('/api/community', communityRouter);
// blogRoute
// - This route works hand in hand with the blogs model and controller
// app.use('/blog', path.join(__dirname, 'routes', 'blog.routes.js'));
app.use('/api/blog', blogRouter);

// static files (build of my frontend)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, './client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, './client', 'build', 'index.html'),
            (err) => {
                if (err) {
                    res.status(500).json({
                        err
                    });
                }
            });
    });
}

// export
export default app;