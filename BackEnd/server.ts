import express from "express";
import env from "dotenv";
import connect from "./database/config";
import cors from "cors";
import Routes from "./routes/routes";

env.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use("/", Routes);

async function start() {
    await connect();
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on http://${process.env.HOST}:${process.env.PORT}`);
    });
}

start();