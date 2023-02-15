import * as dotenv from 'dotenv'
dotenv.config();
import express from "express";
import { sql } from './configs/dbConfig.js'
import cors from 'cors';
import bodyParser from 'body-parser';

// <----------- routes -------------->
import userRoute from './routes/user.js';
import productRoute from './routes/product.js'


const server = express();
const port = String(process.env.PORT) || 2000;

server.use(cors());
server.use(bodyParser.json())
server.use(express.urlencoded({ extended: true }))
server.use(express.json());

sql.connect((err) => {
    if (err) return console.log(err);
    console.log("Connected!!!");
});

server.use("/", userRoute);
server.use("/product", productRoute);

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
