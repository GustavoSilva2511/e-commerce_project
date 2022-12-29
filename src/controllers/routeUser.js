import user from "../models/user.js";
import userDao from "../dao/userDao.js";

const usersRouts = (app, db) =>{
    const userdao = new userDao(db);

    app.get("/users", async (request, response) => {
        try {
            const data = await userdao.getAllUser(); 
            response.json(data);

        } catch (error) {
            console.error(error);
        }
    });

    app.post("/users", async (request, response) => {
        try {
            const newUser = new user(
                request.body.name,
                request.body.email,
                request.body.password
            );

            const data = await userdao.insertUser(newUser);
            response.send(data);

        } catch (error) {
            console.error(error);
        }
    })

    app.put("/users/:id", async (request, response) => {
        try {
            const id = request.params.id;
            const data = await userdao.changeUser(request.body, id);
            response.send(data);
        } catch (error) {
            console.error(error);
        }
    });

    app.put("/users/setToken/:id", async (request, response) => {
        try {
            const id = request.params.id;
            const data = await userdao.changeUserToken(request.body, id);
            response.send(data);
        } catch (error) {
            console.error(error);
        }
    });
    
    app.delete("/users/:id", async (request, response) => {
        try {
            const id = request.params.id;
            const data = await userdao.deleteUser(id);
            response.send(data);
            
        } catch (error) {
            console.error(error);
        }
    });
};

export default usersRouts;