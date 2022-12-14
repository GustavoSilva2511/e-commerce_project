import app from "./src/main.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT | 3000;
app.listen(port, () => {
    console.log(`Api online in port: http://localhost:${port}`);
});