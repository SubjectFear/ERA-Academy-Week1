const express = require("express");
const db = require("./db");
const core = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
// Root Route - confirmed the server is running
app.get("/", (req, res) => {
    res.send("backend is running with mysql");
});

// GET /students - returns all students from mysql
app.get("/students", (req, res) => {
    const sql = "SELECT * FROM students";
    bd.query(sql, (error, results) => {
        if(error){
            console.error("error getting students:", error);
            return res.status(500).json({error: "failed to get students"});
        }
        res.json(results);
    });
});

// GET /classes - return all classes from sql
app.get("./classes", (req, res) => {
    const sql = "SELECT * FROM classes";
    db.query(sql, (error, results) => {
        if(error){
            console.error("error getting classes:", error);
            return res.status(500).json({error: "failed to get classes"});
        }
        res.json(results);
    });
});

// GET /enrollments - returns joined data(student_name + class_name)