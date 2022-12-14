import sqlite3 from "sqlite3";
import path from "path";
import fs from "fs-extra"

const dir = path.resolve("./src/database/", "database.db");
const exist = fs.pathExistsSync(dir);

let db = '';
if (exist){
  db = new sqlite3.Database(dir);
  process.on("SIGINT", () =>
      db.close(() => {
      console.log("BD encerrado!");
      process.exit(0);
    })
  );

}else{
  console.log("database not found!")
}

export default db;