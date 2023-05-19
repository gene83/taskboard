import express from "express";
import morgan from 'morgan';
import { createNewUser } from "./modules/user";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(200);
    res.json({ message: 'Hello from server' })
})

app.post('/user', createNewUser);

export default app;