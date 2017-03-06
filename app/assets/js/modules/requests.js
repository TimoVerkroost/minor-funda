// AJAX requests
var requests = (function () {
    // Search API
    var type = "koop";
    var place = "/amsterdam";
    var priceRange;
    var radius = "/+5km";
    var searchURL;
    var URL;
    var page = 1;

    // List API
    var tinyBase = "http://funda.kyrandia.nl/tinyId/";
    var tinyID = "49013804,49015089,49047381,49042033,49036708,49010470,48103537";
    var tinyURL = tinyBase + tinyID;

    return {
        searchRadius: function (min, max) {
            priceRange = "/" + min + "-" + max;
            searchURL = "/?type=" + type + "&zo=" + place + priceRange + radius + "/&page=" + page + "&pagesize=25";
            URL = config.kyrandiaURL + config.apiKey + searchURL;
            aja()
                .method("get")
                .url(URL)
                .on("200", function (response) {
                    console.log(response);
                })
                .on("40x", function () {

                })
                .on("500", function () {

                })
                .go();
        },

        getDetail: function () {
            aja()
                .method("get")
                .url(tinyURL)
                .on("200", function (response) {
                    console.log(response);
                })
                .on("40x", function () {

                })
                .on("500", function () {

                })
                .go();
        }
    };

})();