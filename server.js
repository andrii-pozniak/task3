const app = require("./app");
const dotenv = require("dotenv");
dotenv.config();
const{ connectMongo } = require("./db/connection");

const start = async() => {
    try {
        await connectMongo();

        app.listen(5000, (error) => {
            if(error) {
                console.log("Error at server", error);
            }
        })
    } catch (error) {
        console.error(`Failed to launch app with error: ${error.message}`);
    }
};

start();