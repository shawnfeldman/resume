var express = require("express");
var restify = require("restify");
var Routes = require("./routes").Routes;

var restServer = restify.createServer();
var routes = new Routes(restServer);
routes.initialize();
restServer.listen(8080);
