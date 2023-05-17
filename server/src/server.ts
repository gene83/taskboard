import express from "express";
import morgan from 'morgan';

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(200);
    res.json({ message: 'Hello from server' })
})


export default app;