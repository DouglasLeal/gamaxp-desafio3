import * as dotenv from 'dotenv';
import express from "express";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.status(200).json({msg: "Hello World"})
})

const port = process.env.PORT; 

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}...`);
});