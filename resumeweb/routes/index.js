/*
 * GET home page.
 */
exports.index = function (req, res) {
    var server = 'http://shawnfeldman.resumeapi.jit.su/';
    res.render('index', { title:'Express', detailsRoute:server+'details/',headerRoute:server+'header/' });
};