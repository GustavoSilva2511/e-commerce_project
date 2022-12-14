import Express from "express";
import cors from "cors";

const app = Express()

//middlesware
import middlesware from "./middlewares/config.js";
middlesware(app, Express, cors);

//database
//check id file exist /if no, create a new
import checkDb from "./database/dbCreate.js";
checkDb();

import db from "./database/dbInit.js";

//rotas
import usersRouts from "./controllers/routeUser.js";
usersRouts(app, db);

import cartsRouts from "./controllers/routeCart.js";
cartsRouts(app, db);

import productsRouts from "./controllers/routeProduct.js";
productsRouts(app, db);

export default app;