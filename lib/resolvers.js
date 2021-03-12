
const { ObjectId } = require("mongodb");
const connectDB = require("./db");
const mutations = require("./mutation");
const queries = require("./queries");

module.exports = {
    
    Query: queries,
    Mutation: mutations
}