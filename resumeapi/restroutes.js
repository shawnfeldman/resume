var Resume = require('./resume').Resume;
var Routes = function (restServer) {
    restServer.defaultResponseHeaders = function (data) {
        this.header('contentType', 'json');
    };
    this.initialize = function () {
        restServer.get("/details/", function (req, res, next) {
            var resume = new Resume();
            res.send(resume.getDetails());
        });
        restServer.get("/header/", function (req, res, next) {
            var resume = new Resume();
            res.send(resume.getHeader());
        });
    };
};

exports.Routes = Routes;
