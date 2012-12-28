var Resume = require('./resume').Resume;
var Routes = function (restServer) {
    restServer.defaultResponseHeaders = function (data) {
        this.header('contentType', 'json');
    };
    this.initialize = function () {
        restServer.get("/sections/", function (req, res, next) {
            var resume = new Resume();
            res.send(resume.getSections());

        });
    };
};

exports.Routes = Routes;
