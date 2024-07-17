
const express = require("express");
const authRoutes = require("./routes/auth");
const todoRoutes = require("./routes/todo");
const cors = require("cors");
const dbconnect  = require("./db/index");


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
