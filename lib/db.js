
const { MongoClient } = require("mongodb");
/*const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_NAME
} = process.env */

const DB_NAME = "platzi-dir";
const mongoUrl = `mongodb://localhost:27017/platzi-dir`;
let connection;

async function connectDB(){
    if(connection) return connection

    let client; 
    try {
        client = await MongoClient.connect(mongoUrl,{
            useNewUrlParser: true
        });
        connection = client.db(DB_NAME)
    } catch (error) {
        console.error("Could no connect to db",mongoUrl, error);
        process.exit(1);
    }

    return connection;
}

module.exports = connectDB;