var express = require('express');
var app = express();
var PORT = 3000;
require ('custom-env').env('dev')

// Without middleware
app.get('/ping', function(request, response){

    var ping = require('./src/Controllers/Ping/Ping');

    ping.index().then(function (result){
        response.json({env : process.env.APP_ENV})
    })
});

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});