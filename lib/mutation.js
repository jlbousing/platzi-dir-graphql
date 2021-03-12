
const connectDB = require("./db");


module.exports = {

    createCourse: async (root, { input }) => {

        let db;
        let course;
        console.log("probando InputCourse ",input);
        try {
            db = await connectDB();
            course = await db.collection("courses").insertOne(input);
            input._id = course.insertedId; //ÚLTIMO ID INSERTADO
        } catch (error) {
            console.error("Error in createCourse ",error);
        }

        return input;

    },
    createStudent: async (root, {input}) => {

        let db;
        let student;
        console.log("probando InputStudent ",student);
        try {

            db = await connectDB();
            student = await db.collection("students").insertOne(input);
            input._id = student.insertedId; //ÚLTIMO ID INSERTADO
            
        } catch (error) {
            
            console.error("Error in createStudeent ",error);
        }

        return input;
    }
}