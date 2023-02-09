import express from "express";
import { sql } from './configs/dbConfig.js'

// <----------- routes -------------->
import userRoute from './routes/user.js';

const server = express();
const port = process.env.PORT || 2000;

server.use(express.json());

sql.connect((err) => {
    if (err) return console.log(err);
    console.log("Connected!!!");
});

server.use("/", userRoute);

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
