
const courses = [
    {
        _id: "anyID1",
        title: "Mi titulo",
        teacher: "Mi profesor",
        description: "Una descripción",
        topic: "programacion"
    },
    {
        _id: "anyID2",
        title: "Mi titulo 2",
        teacher: "Mi profesor",
        description: "Una descripción",
        topic: "programacion"
    },
    {
        _id: "anyID3",
        title: "Mi titulo 3",
        teacher: "Mi profesor",
        description: "Una descripción",
        topic: "programacion"
    }
];

module.exports = {
    
    Query: {
        getCourses: () => {
            return courses;
        },
        getCourse: (root, args) => {
            const course = courses.filter(course => course._id === args.id);
            return course.pop();
        }
    }
}