import product from "../models/product.js";
import productDao from "../dao/productDao.js";

const productsRoutes = (app, db) =>{
    const productdao = new productDao(db);

    app.get("/products", async (request, response) => {
        try {
            const data = await productdao.getAllProduct(); 
            response.json(data);
            console.log(data)

        } catch (error) {
            console.error(error);
        }
    });

    app.post("/products", async (request, response) => {
        try {
            const newProduct = new product(
                request.body.tittle,
                request.body.description,
                request.body.price
            );

            const data = await productdao.insertProduct(newProduct);
            response.send(data);

        } catch (error) {
            console.error(error);
        }
    })

    app.put("/products/:id", async (request, response) => {
        try {
            const id = request.params.id;
            const data = await productdao.changeProduct(request.body, id);
            response.send(data);
        } catch (error) {
            console.error(error);
        }
    });
    
    app.delete("/products/:id", async (request, response) => {
        try {
            const id = request.params.id;
            const data = await productdao.deleteProduct(id);
            response.send(data);
            
        } catch (error) {
            console.error(error);
        }
    });
};

export default productsRoutes;