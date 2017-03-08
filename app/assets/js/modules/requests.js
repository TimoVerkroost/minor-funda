// AJAX requests
var requests = (function () {
    var callURL;
    var loadingIndicator;

    // Search API
    var type = "koop";
    var place;
    var range;
    var yearRange;
    var typeHouse = "/appartement";
    var searchURL;
    var page = 1;

    // Tiny detail API
    var tinyBase = "http://funda.kyrandia.nl/tinyId/";
    var tinyID = "49013804,49015089,49047381,49042033,49036708,49010470,48103537,49165890";
    var tinyURL = tinyBase + tinyID;
    var i;

    // Full detail API
    var fullDetailURL;
    var allObjects = [];
    var total = 0;

    // Suggested homes
    var suggestedURL;
    var minPrice;
    var maxPrice;
    var radiusSuggested = "/+15km";
    var price;
    var area;
    var rooms;

    return {
        search: function () {
            place       = localStorage.fundaPlace;
            range       = localStorage.fundaRange;
            yearRange   = localStorage.fundaBuildYear;
            searchURL = "/?type=koop&zo=/"+ place +"/+"+ range +"km/175000-225000/50+woonopp/appartement/2+kamers/bouwperiode-"+ yearRange +"/&page="+ page +"&pagesize=10";
            callURL = config.kyrandiaURL + config.apiKey + searchURL;
            document.getElementsByClassName("loaderAjax")[0].classList.add("show");
            aja()
                .method("get")
                .url(callURL)
                .on("200", function (response) {
                    // Loaded template for searched items
                    templates.searchList(response);
                    document.getElementsByClassName("loaderAjax")[0].classList.add("hide");
                    document.getElementsByClassName("loaderAjax")[0].classList.remove("show");
                })
                .on("40x", function () {

                })
                .on("500", function () {

                })
                .go();
        },

        getTinyDetail: function () {
            document.getElementsByClassName("loaderAjax")[0].classList.add("show");
            // AJAX call for tiny detail items
            aja()
                .method("get")
                .url(tinyURL)
                .on("200", function (response) {
                    console.log(response);
                    // Make for every tiny object a bigger object
                    for (i = 0; i < response.length; i++) {
                        requests.getFullDetail(response[i].intid, response.length);
                    }
                    // Loaded template for saved items
                    templates.tinyDetailList(response);
                    document.getElementsByClassName("loaderAjax")[0].classList.add("hide");
                    document.getElementsByClassName("loaderAjax")[0].classList.remove("show");
                })
                .on("40x", function () {

                })
                .on("500", function () {

                })
                .go();
        },

        getFullDetail: function (detailID, totalDetails) {
            fullDetailURL = type + "/" + detailID;
            callURL = config.kyrandiaURL + "detail/" + config.apiKey + "/" + fullDetailURL;
            // AJAX call for full detail items
            aja()
                .method("get")
                .url(callURL)
                .on("200", function (response) {
                    // Count how much calls are done
                    total++;
                    // Push full detail object to array
                    allObjects.push(response);
                    // Do action when all details are pushed
                    if (total === totalDetails) {
                        // Calculate filters here
                        suggestions.calculate(allObjects);
                    }
                })
                .on("40x", function () {

                })
                .on("500", function () {

                })
                .go();
        },

        getSuggestedHomes: function () {
            // Info from search
            place       = localStorage.fundaPlace;
            yearRange   = localStorage.fundaBuildYear;
            // Info from saved
            price       = localStorage.fundaAveragePrice;
            area        = localStorage.fundaAverageSurface;
            rooms       = localStorage.fundaAverageRooms;
            // Make min price range 5% lower then min price
            minPrice = Math.round(price * 0.95);
            // Make max price range 5% higher then max price
            maxPrice = Math.round(price * 1.05);
            // Generate API call URL for suggested items
            suggestedURL = "?type="+ type +"&zo=/"+ place +"/"+ radiusSuggested +"/" + minPrice +"-"+ maxPrice +"/"+ area +"+woonopp"+  typeHouse + "/" + rooms +"+kamers/&page=1&pagesize=25";
            // Combine URL with API root url and API key
            callURL = config.kyrandiaURL + config.apiKey + suggestedURL;

            document.getElementsByClassName("loaderAjax")[0].classList.add("show");
            // AJAX call for suggested items
            aja()
                .method("get")
                .url(callURL)
                .on("200", function (response) {
                    // Loaded template for suggested items
                    templates.suggestedList(response);
                    document.getElementsByClassName("loaderAjax")[0].classList.add("hide");
                    document.getElementsByClassName("loaderAjax")[0].classList.remove("show");
                })
                .on("40x", function () {

                })
                .on("500", function () {

                })
                .go();
        }
    };

})();