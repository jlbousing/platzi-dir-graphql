
const { ObjectId } = require("mongodb");
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
    updateCourse: async (root, {_id, input}) => {
        let db;
        let course;
        
        try {

            db = await connectDB();
            await db.collection("courses").updateOne(
                {_id: ObjectId(_id)},
                {$set: input}
            );

            course = db.collection("courses").findOne({_id: ObjectId(_id)});
            
        } catch (error) {
            
            console.error("Error in updateCourse ",error);
        }

        return course;
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
    },
    updateStudent: async (root, {_id, input }) => {

        try {

            let db;
            let student;

            db = await connectDB();
            await db.collection("students").updateOne(
                {_id: ObjectId(_id)},
                {$set: input}
            );

            student = await db.collection("students").findOne({_id: ObjectId(_id)});
            
        } catch (error) {
            
            console.error("Error in updateStudent ", error);
        }

        return student;
    }
}