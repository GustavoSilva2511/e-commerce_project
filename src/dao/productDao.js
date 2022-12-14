class productDao {
    constructor (db) {
        this.db = db;
    }

    getAllProduct() {
        const SQL = `SELECT * FROM products`;

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

    insertProduct(newProduct) {
        const SQL = `INSERT INTO products(id, tittle, description, price) VALUES (?, ?, ?, ?)`;

        return new Promise((res, rej) => {
            this.db.run(SQL, 
                [
                newProduct.id, 
                newProduct.tittle,
                newProduct.description, 
                newProduct.price, 
                ],
                (err) => {
                    if (!err) {
                        res("Product add with sucess!");
                    }else{
                        rej(err);
                    }
                });  
        });
    }

    changeProduct(product, id) {
        const SQL = `UPDATE products
        SET tittle = ?, 
        description = ?, 
        price = ?
        WHERE id = ?`;

        const newData = [
            product.tittle, 
            product.description, 
            product.price, 
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

    deleteProduct(id) {
        const SQL = `DELETE FROM products WHERE id = ?`;
        
        return new Promise((res, rej) => {
            this.db.run(SQL, id, (error) => {
                if (!error) {
                    res("Product deleted!");
                }else{
                    rej(error);
                }
            })
        })

    }
}

export default productDao;