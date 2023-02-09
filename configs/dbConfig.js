import mysql from 'mysql';
import * as dotenv from 'dotenv'
dotenv.config();

export const sql = mysql.createConnection({
    host: String(process.env.API_HOST),
    user: String(process.env.API_USER),
    password: String(process.env.API_PASSWORD),
    database: String(process.env.DATABASE),
    port: String(process.env.HOST_PORT)
})