import express from "express";
import morgan from 'morgan';
import userRouter from './routes/userRouter';

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.status(200);
    res.json({ message: 'Hello from server' })
})

export default app;