(function(){
    "use strict";
    var app = (function () {
        return {
            // App settings
            init: function () {
                requests.getDetail();
            }
        };
    })();

    app.init();
}());