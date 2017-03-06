// AJAX requests
var requests = (function () {
    // Search API
    var type = "koop";
    var place = "amsterdam";
    var priceRange = "125000-200000";
    var radius = 10;
    var searchURL = "/?type=" + type + "&zo=/" + type + "/" + place + "/+" + radius + "km/" + priceRange + "/&page=1&pagesize=25";
    var URL = config.kyrandiaURL + config.apiKey + searchURL;

    // List API
    var tinyBase = "http://funda.kyrandia.nl/tinyId/";
    var tinyID = "49013804,49015089";
    var tinyURL = tinyBase + tinyID;

    return {
        searchRadius: function () {
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