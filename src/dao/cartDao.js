class cartDao {
    constructor (db) {
        this.db = db;
    }

    getAllCart() {
        const SQL = `SELECT * FROM carts`;

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

    insertCart(newCart) {
        const SQL = `INSERT INTO carts(id, user_id, product_id, stats) VALUES (?, ?, ?, ?)`;

        return new Promise((res, rej) => {
            this.db.run(SQL, 
                [
                newCart.id, 
                newCart.user_id, 
                newCart.product_id, 
                newCart.stats
                ],
                (err) => {
                    if (!err) {
                        res("Cart add with sucess!");
                    }else{
                        rej(err);
                    }
                });  
        });
    }

    changeCart(cart, id) {
        const SQL = `UPDATE carts 
        SET user_id = ?, 
        product_id = ?, 
        stats = ?
        WHERE id = ?`;

        const newData = [
            cart.user_id, 
            cart.product_id, 
            cart.stats, 
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

    deleteCart(id) {
        const SQL = `DELETE FROM carts WHERE id = ?`;
        
        return new Promise((res, rej) => {
            this.db.run(SQL, id, (error) => {
                if (!error) {
                    res("Cart deleted!");
                }else{
                    rej(error);
                }
            })
        })

    }
}

export default cartDao;