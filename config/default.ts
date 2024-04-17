import db from "./db";

function createTables() {
    db.exec(
        `CREATE TABLE IF NOT EXISTS Streak (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            count INTEGER DEFAULT 0
        )`,
        (err) => {
            if (err) {
                console.error(err.message);
            }
            console.log("Streak Table created.");
        }
    );

    db.exec(
        `CREATE TABLE IF NOT EXISTS Day (
            id INTEGER PRIMARY KEY,
            date DATE DEFAULT CURRENT_DATE,
            response TEXT,
            FOREIGN KEY (id) REFERENCES Streak(id)
        )`,
        (err) => {
            if (err) {
                console.error(err.message);
            }
            console.log("Days Table created.");
        }
    );
}

function dropTables() {
    db.exec(`DROP TABLE IF EXISTS Streak`, (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log("Streak Table deleted.");
    });

    db.exec(`DROP TABLE IF EXISTS Day`, (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log("Days Table deleted.");
    });
}

export { createTables, dropTables };
