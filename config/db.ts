import path from "path";
import sqlite3 from "sqlite3";

const db = new sqlite3.Database(
    path.resolve(__dirname, "../db/database.sqlite3"),
    (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log("Connected to the database.");
    }
);

export default db;
