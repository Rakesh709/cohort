//server without express

const http = require("http");

const server=http.createServer(function(req,res){
    console.log("Incoming req ayya");
    res.end('yelo response')
});

server.listen(8000,function(){
    console.log("Server started");
    
})

const express = require("express");
const { appendFile } = require("fs");

const handlerFunction = express();


handlerFunction.get('/',(req,res)=> res.send("Homepage"))

