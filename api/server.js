const express = require("express");
const StudentsRouter = require('../students/students-router.js')


const server = express();

server.use(express.json());

server.use('/students', StudentsRouter);


server.get("/", (req, res) => {
    res.status(200).json({ api: "up" });
});

module.exports = server;