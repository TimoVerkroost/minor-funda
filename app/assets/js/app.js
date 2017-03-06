(function(){
    "use strict";
    var app = (function () {
        return {
            // App settings
            init: function () {
                requests.searchRadius();
                requests.getDetail();
            }
        };
    })();

    app.init();
}());