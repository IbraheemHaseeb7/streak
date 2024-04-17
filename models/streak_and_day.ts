import db from "../config/db";

function getUserAllDataById(id: number) {
    return new Promise((resolve, reject) => {
        const sql = `
        SELECT Day.id, Day.response, Day.date, Streak.count, Streak.name FROM Day
        INNER JOIN Streak ON Streak.id=Day.id 
        WHERE Streak.id=${id}`;

        db.all(sql, [], (err, rows) => {
            if (err) {
                reject(err.message);
            }
            resolve(rows);
        });
    });
}

export default { getUserAllDataById };
