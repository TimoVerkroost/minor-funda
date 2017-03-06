(function(){
    "use strict";
    var app = (function () {
        var route;
        return {
            // App settings
            init: function () {
                // Get hash from url
                route = window.location.hash;
                // If no hash is in the URL add default hash
                if (!route) {
                    route = "#bewaard";
                    window.location.href  = window.location.href + route;
                }
                requests.getDetail();
                sections.saved();
                routers.listen();
            }
        };
    })();

    app.init();
}());