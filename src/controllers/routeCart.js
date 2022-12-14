import cart from "../models/cart.js";
import cartDao from "../dao/cartDao.js";

const cartsRouts = (app, db) => {
    const cartdao = new cartDao(db);

    app.get("/carts", async (request, response) => {
        try {
            const data = await cartdao.getAllCart();
            response.json(data);
        } catch (error) {
            console.log(error)
        }
    });

    app.post("/carts", async (request, response) => {
        try {
            const newCart = new cart(
                request.body.user_id,
                request.body.product_id,
                request.body.stats
            );
            const id = request.params.id;
            const data = await cartdao.insertCart(newCart, id);
            response.send(data);

        } catch (error) {
            console.log(error)
        };
    });

    app.put("/carts/:id", async (request, response) => {
        try {
            const id = request.params.id;
            const data = await cartdao.changeCart(request.body, id);
            response.send(data);
        } catch (error) {
            console.log(error)
        }
    })

    app.delete("/carts/:id", async (request, response) => {
        try {
            const id = request.params.id;
            const data = await cartdao.deleteCart(id);
            response.send(data);
        } catch (error) {
            console.log(error);
        }
    })

}

export default cartsRouts;