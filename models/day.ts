import db from "../config/db";

function addDay(input: { id: number; response: string }) {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            db.run("BEGIN TRANSACTION;");

            db.run(
                `UPDATE Streak SET count = count + 1 WHERE id = ${input.id};`,
                (err) => {
                    if (err) {
                        return db.run("ROLLBACK;", () => reject(err.message));
                    }

                    db.run(
                        `INSERT INTO Day (id, response) VALUES (${input.id}, '${input.response}');`,
                        (err) => {
                            if (err) {
                                return db.run("ROLLBACK;", () =>
                                    reject(err.message)
                                );
                            }

                            db.run("COMMIT;", (err) => {
                                if (err) {
                                    reject(err.message);
                                } else {
                                    resolve("Day added successfully.");
                                }
                            });
                        }
                    );
                }
            );
        });
    });
}

function getAllDaysById(id: number) {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM Day WHERE id = ${id}`;

        db.all(sql, [], (err, rows) => {
            if (err) {
                reject(err.message);
            }
            resolve(rows);
        });
    });
}

export default { addDay, getAllDaysById };
