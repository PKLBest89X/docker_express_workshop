import * as dotenv from 'dotenv'
dotenv.config();
import express from "express";
import { sql } from './configs/dbConfig.js'
import cors from 'cors';

// <----------- routes -------------->
import userRoute from './routes/user.js';


const server = express();
const port = String(process.env.PORT) || 2000;

server.use(express.json());
server.use(cors());

sql.connect((err) => {
    if (err) return console.log(err);
    console.log("Connected!!!");
});

server.use("/", userRoute);

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
