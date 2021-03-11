
const { graphql, buildSchema } = require("graphql");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const app = express();
const port = process.env.port || 3000;
const { readFileSync} = require("fs");
const { join } = require("path");
const resolvers = require("./lib/resolvers");
//definiendo el schema

const schema = buildSchema(
    readFileSync(join(__dirname, 'lib', 'schema.graphql'), 'utf-8')
  );


//EJECUTAR QUERY
graphql(schema,'{getCourses {_id title }}', resolvers).then(data => {
    data.data.getCourses.forEach(element => { 
        console.log("test");
        console.log(element.title);
    })
});

app.use(
    '/graphql',
    graphqlHTTP({
      schema: schema,
      graphiql: true,
      rootValue: resolvers
    }),
  );

app.listen(port, () => {
    console.log(`puerto activo en ${port}, http://localhost:${port}/graphql`);
});