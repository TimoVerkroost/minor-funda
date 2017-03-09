// AJAX requests
var requests = (function () {
    var callURL;
    var loadingIndicator = document.getElementsByClassName("loaderAjax")[0];
    var errorPage = window.location.origin + "/error.html";

    // Search API
    var type = "koop";
    var place;
    var range;
    var yearRange;
    var minPrice;
    var maxPrice;
    var typeHome;
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
    var minPriceSuggested;
    var maxPriceSuggested;
    var radiusSuggested = "/+15km";
    var price;
    var area;
    var rooms;

    return {
        search: function () {
            place       = localStorage.fundaPlace;
            range       = localStorage.fundaRange;
            yearRange   = localStorage.fundaBuildYear;
            typeHome    = localStorage.fundaTypeHome;
            minPrice    = localStorage.fundaMinPrice;
            maxPrice    = localStorage.fundaMaxPrice;
            searchURL = "/?type="+ type +"&zo=/"+ place +"/+"+ range +"km/"+ minPrice +"-"+ maxPrice +"/0+woonopp/"+ typeHome +"/2+kamers/bouwperiode-"+ yearRange +"/&page="+ page +"&pagesize=25";
            callURL = config.kyrandiaURL + config.apiKey + searchURL;
            // Loading indicator
            loadingIndicator.classList.add("show");
            loadingIndicator.classList.remove("hide");
            aja()
                .method("get")
                .url(callURL)
                .on("200", function (response) {
                    // Loaded template for searched items
                    templates.searchList(response);
                    // Loading indicator
                    loadingIndicator.classList.add("hide");
                    loadingIndicator.classList.remove("show");
                })
                .on("40x", function () {
                    window.location.href = errorPage;
                })
                .on("500", function () {
                    window.location.href = errorPage;
                })
                .go();
        },

        getTinyDetail: function () {
            // Loading indicator
            loadingIndicator.classList.add("show");
            loadingIndicator.classList.remove("hide");
            // AJAX call for tiny detail items
            aja()
                .method("get")
                .url(tinyURL)
                .on("200", function (response) {
                    // Make for every tiny object a bigger object
                    for (i = 0; i < response.length; i++) {
                        requests.getFullDetail(response[i].intid, response.length);
                    }
                    // Loaded template for saved items
                    templates.tinyDetailList(response);
                    // Loading indicator
                    loadingIndicator.classList.add("hide");
                    loadingIndicator.classList.remove("show");
                })
                .on("40x", function () {
                    window.location.href = errorPage;
                })
                .on("500", function () {
                    window.location.href = errorPage;
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
                    // Redirect to error page
                    window.location.href = errorPage;
                })
                .on("500", function () {
                    // Redirect to error page
                    window.location.href = errorPage;
                })
                .go();
        },

        getSuggestedHomes: function () {
            // Info from search
            place       = localStorage.fundaPlace;
            typeHome    = localStorage.fundaTypeHome;
            //yearRange   = localStorage.fundaBuildYear;
            // Info from saved
            price       = localStorage.fundaAveragePrice;
            area        = localStorage.fundaAverageSurface;
            rooms       = localStorage.fundaAverageRooms;
            // Make min price range 5% lower then min price
            minPriceSuggested = Math.round(price * 0.95);
            // Make max price range 5% higher then max price
            maxPriceSuggested = Math.round(price * 1.05);
            // Generate API call URL for suggested items
            suggestedURL = "?type="+ type +"&zo=/"+ place +"/"+ radiusSuggested +"/" + minPriceSuggested +"-"+ maxPriceSuggested +"/"+ area +"+woonopp"+  "/" + typeHome + "/" + rooms +"+kamers/&page=1&pagesize=25";
            // Combine URL with API root url and API key
            callURL = config.kyrandiaURL + config.apiKey + suggestedURL;
            // Loading indicator
            loadingIndicator.classList.add("show");
            loadingIndicator.classList.remove("hide");
            // AJAX call for suggested items
            aja()
                .method("get")
                .url(callURL)
                .on("200", function (response) {
                    // Loaded template for suggested items
                    templates.suggestedList(response);
                    // Loading indicator
                    loadingIndicator.classList.add("hide");
                    loadingIndicator.classList.remove("show");
                })
                .on("40x", function () {
                    // Redirect to error page
                    window.location.href = errorPage;
                })
                .on("500", function () {
                    // Redirect to error page
                    window.location.href = errorPage;
                })
                .go();
        }
    };

})();