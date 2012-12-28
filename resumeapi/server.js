var restify = require("restify"),
    RestRoutes = require("./restroutes").Routes,
    http = require('http'),
    path = require('path');

var restServer = restify.createServer();
var restRoutes = new RestRoutes(restServer);
restRoutes.initialize();
restServer.listen(8081);
