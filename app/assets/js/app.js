(function(){
    "use strict";
    var app = (function () {
        return {
            // App settings
            init: function () {
                // load tiny detials to generate suggested
                requests.getTinyDetail();
                // Start routers
                routers.listen();
            }
        };
    })();

    app.init();
}());