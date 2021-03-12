
const connectDB = require("./db");


module.exports = {

    createCourse: async (root, { input }) => {

        let db;
        let course;
        console.log("probando input ",input);
        try {
            db = await connectDB();
            course = await db.collection("courses").insertOne(input);
            input._id = course.insertedId; //ÚLTIMO ID INSERTADO
        } catch (error) {
            console.error("Error in createCourse ",error);
        }

        return input;

    }
}