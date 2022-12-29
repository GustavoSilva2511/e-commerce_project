
class usarDao {
    constructor (db) {
        this.db = db;
    }

    getAllUser() {
        const SQL = `SELECT * FROM users`;

        return new Promise((res, rej) => {
            this.db.all(SQL, (err, rows) => {
                if (!err) {
                    res(rows);
                }else {
                    rej(err);
                }
            });
        })
    }

    insertUser(newUser) {
        const SQL = `INSERT INTO users(id, name, email, password) VALUES (?, ?, ?, ?)`;

        return new Promise((res, rej) => {
            this.db.run(SQL, 
                [
                newUser.id, 
                newUser.name, 
                newUser.email, 
                newUser.password
                ],
                (err) => {
                    if (!err) {
                        res("User add with sucess!");
                    }else{
                        rej(err);
                    }
                });  
        });
    }

    changeUser(user, id) {
        const SQL = `UPDATE users 
        SET name = ?, 
        email = ?, 
        password = ?
        WHERE id = ?`;

        const newData = [
            user.name, 
            user.email, 
            user.password, 
            id
        ];

        return new Promise((res, rej) => {
            this.db.run(SQL, newData, (error) => {
                if (!error) {
                    res("Updated");
                }else {
                    rej(error);
                }
            })
        })
    }

    changeUserToken(body, id) {
        const SQL = `UPDATE users 
        SET token = ?
        WHERE id = ?`;

        const newToken = [body.token, id]

        return new Promise((res, rej) => {
            this.db.run(SQL, newToken, (error) => {
                if (!error) {
                    res("Updated");
                }else {
                    rej(error);
                }
            })
        })
    }



    deleteUser(id) {
        const SQL = `DELETE FROM users WHERE id = ?`;

        return new Promise((res, rej) => {
            this.db.run(SQL, id, (error) => {
                if (!error) {
                    res("User deleted!");
                }else{
                    rej(error);
                }
            })
        })

    }
}

export default usarDao;