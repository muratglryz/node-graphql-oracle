const http =require("http");
const express = require("express");
const {graphqlHTTP} = require("express-graphql");
const db= require("./models/db");
const QueryRoot = require("./models/QueryRoot");
const app = express();
httpServer=http.createServer(app);

async function start(){
    await db.connection();
    app.use("/graphql",graphqlHTTP({
        schema:QueryRoot,
        graphiql:true
    }));
    httpServer.listen(8080).on('listening',()=>{
        console.log("http://localhost:8080");
    })
}
start();