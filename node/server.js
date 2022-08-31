// Requiring express in our server
const express = require('express');
const app = express();
const fs = require('fs');

global.config = require("./config/config.js");
  
// Defining get request at '/' route
app.get('/:class', function(req, res) {

    var className = req.params.class;
    var upperCaseClassName = className.charAt(0).toUpperCase() + className.slice(1);
    var classPath = config.controllerPath+'/'+upperCaseClassName+'.js';
    var exceptionHandlerPath = config.exceptionHandlerPath+'/Handler.js';
    var exceptionHandler = require(exceptionHandlerPath);

    if (!fs.existsSync(classPath)) {
        res.json(exceptionHandler.index(function(exception){
            res.statusCode = 404;
            res.json(exception);
        },upperCaseClassName+' Route Not Found'))
    }

    var classRequire = require(classPath);

    classRequire.index(function(result){
            res.json(result);
    });
  
});

// Setting the server to listen at port 3000
app.listen(config.port, function(req, res) {
  console.log("Server is running at port 3000");
});