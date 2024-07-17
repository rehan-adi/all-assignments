import express from "express";
import authRoutes from "./routes/auth";
import todoRoutes from "./routes/todo";
import cors from "cors";
import {dbconnect}  from "./db/index";


const port = 3000;

dbconnect();

const app = express();


app.use(cors());
app.use(express.json());


app.use("/auth", authRoutes);
app.use("/todo", todoRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
