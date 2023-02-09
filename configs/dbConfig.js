import mysql from 'mysql';


export const sql = mysql.createConnection({
    host: "mysql-container",
    user: "root",
    password: "gg1234",
    database: "docker_workshop",
    port: 3306
})