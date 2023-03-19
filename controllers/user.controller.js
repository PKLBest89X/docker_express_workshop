import { sql } from '../configs/dbConfig.js';

export const getUsers = (req, res) => {
    sql.query("select * from tb_user", (err, result) => {
        if (err) return res.sendStatus(400);
        return res.status(200).json({
            users: result
        })
    })
}

export const addUser = (req, res) => {
    const { name, surname } = req.body;
    sql.query(`insert into tb_user(name, surname) VALUES ('${name}', '${surname}')`, (err, result) => {
        if (err) return res.sendStatus(400);
        return res.sendStatus(201)
    })
}