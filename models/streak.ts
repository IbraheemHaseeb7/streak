import db from "../config/db";

function addStreak(name: string) {
    return new Promise((resolve, reject) => {
        const sql = `
        INSERT INTO Streak (name) 
        VALUES 
        ('${name}')`;

        db.run(sql, (err) => {
            if (err) {
                reject(err.message);
            }
            resolve("Streak added successfully.");
        });
    });
}

function getAllStreaks() {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM Streak`;

        db.all(sql, [], (err, rows) => {
            if (err) {
                reject(err.message);
            }
            resolve(rows);
        });
    });
}

function getStreakById(id: number) {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM Streak WHERE id = ${id}`;

        db.get(sql, [], (err, row) => {
            if (err) {
                reject(err.message);
            }
            resolve(row);
        });
    });
}

function incrementStreak(id: number) {
    return new Promise((resolve, reject) => {
        const sql = `UPDATE Streak SET count = count + 1 WHERE id = ${id}`;

        db.run(sql, (err) => {
            if (err) {
                reject(err.message);
            }
            resolve("Streak incremented successfully.");
        });
    });
}

function deleteStreak(id: number) {
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM Streak WHERE id = ${id}`;

        db.run(sql, (err) => {
            if (err) {
                reject(err.message);
            }
            resolve("Streak deleted successfully.");
        });
    });
}

export default {
    addStreak,
    getAllStreaks,
    getStreakById,
    incrementStreak,
    deleteStreak,
};
