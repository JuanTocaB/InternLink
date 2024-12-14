import mongoose from "mongoose";
import env from "dotenv";
env.config();

async function connect() {
    const env = process.env;

    mongoose.connect(`mongodb://${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}`);
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", () => {
        console.log("Connected to the database");
    });
}

export default connect;