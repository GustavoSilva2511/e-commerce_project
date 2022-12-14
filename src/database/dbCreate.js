import sqlite3 from "sqlite3";
import path from "path";
import File from "file-api";
import fs from 'fs-extra';

const checkDb = async () => {
    const createDb = (caminhoArq) => {
        const db = new sqlite3.Database(caminhoArq);
    
        //abilitar chaves estrangeiras
        const pragma = `PRAGMA foreign_keys = ON`;
        
        function enableForeignKey() {
          db.run(pragma, (error) => {
            if (error) console.log("Error in process of creation exec 'pragma'");
          });
        };
        
        //==== Users
        const USERS_SCHEMA = `
        CREATE TABLE users (
            id VARCHAR(50) PRIMARY KEY,
            name VARCHAR(80),
            email VARCHAR(80),
            password VARCHAR(100)
        )`;
        
        const createTableUsers = () => {
          db.run(USERS_SCHEMA, (error) => {
            if (error) console.log("Error in process of creation table 'USERS'");
          });
        };


        //==== Cart
        const CARTS_SCHEMA = `
        CREATE TABLE carts (
            id  VARCHAR(50) PRIMARY KEY,
            user_id VARCHAR(50),
            product_id VARCHAR(50),
            stats VARCHAR(100)
        )`;

        const createTableCarts = () =>{
            db.run(CARTS_SCHEMA, (error) => {
                if (error) console.log("Error in process of creation table 'CARTS'");
            });
        };

        //==== Products
        const PRODUCT_SCHEMA = `
        CREATE TABLE products (
            id VARCHAR(50) PRIMARY KEY,
            tittle VARCHAR(80),
            description VARCHAR(80),
            price FLOAT
        )`;

        const createTableProducts = () =>{
            db.run(PRODUCT_SCHEMA, (error) => {
                if (error) console.log("Error in process of creation table 'PRODUCTS'");
            });
        };
    
        
        db.serialize(() => {
          enableForeignKey();
          createTableUsers();
          createTableCarts();
          createTableProducts();
        });
    }
    
    const dir = path.resolve("./src/database/","database.db");
    const exist = await fs.pathExists(dir);
    
    if (exist) {
      console.log("Found database");
    }else{
      createDb(dir)
      console.log("Database created!")
    }
    
};

export default checkDb;