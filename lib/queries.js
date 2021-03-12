
const { ObjectId } = require("mongodb");
const connectDB = require("./db");

module.exports = {

    getCourses: async () => {
        let db;
        let courses = [];
        try {
            db = await connectDB();
            courses = await db.collection('courses').find({})
                .toArray();
            return courses;
        } catch (error) {
            console.error("Error in getCourses ",error);
        }
    },
    /*getCourse: (root, args) => {
        const course = courses.filter(course => course._id === args.id);
        return course.pop();
    }*/
    getCourse: async (root, args) => {
        try {
            db = await connectDB();
            course = await db.collection("courses").find({_id: ObjectId(args.id)})
                .toArray();
            return course.pop();   
        } catch (error) {
            console.error("Error in getCourse ",error);
        }
    }
};