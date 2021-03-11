
const courses = [
    {
        _id: "anyID",
        title: "Mi titulo",
        teacher: "Mi profesor",
        description: "Una descripción",
        topic: "programacion"
    },
    {
        _id: "anyID",
        title: "Mi titulo 2",
        teacher: "Mi profesor",
        description: "Una descripción",
        topic: "programacion"
    },
    {
        _id: "anyID",
        title: "Mi titulo 3",
        teacher: "Mi profesor",
        description: "Una descripción",
        topic: "programacion"
    }
];

module.exports = {
    
    getCourses: () => {
        return courses;
    }
}