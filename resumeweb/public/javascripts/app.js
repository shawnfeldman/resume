require(["jquery"], function($) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {
        alert('hello');
        $('body').alpha().beta();
    });
});