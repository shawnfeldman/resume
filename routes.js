
var Routes = function(restServer){
    restServer.defaultResponseHeaders = function(data){
        this.header('contentType','json');
    };
    this.initialize = function(){
        restServer.get("/sections/",function(req,res,next){
            console.log('got here');
            res.send({hello:"worlds"});

        });
    };
};

exports.Routes = Routes;
