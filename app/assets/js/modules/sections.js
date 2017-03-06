// Sections
var sections = (function () {
    var hidden,
        i,
        formID,
        minPrice,
        maxPrice,
        getResults,
        minPriceValue,
        maxPriceValue;
    return {
        hide: function () {
            // Hide other sections
            hidden = document.getElementsByTagName("section");
            // Loop in all sections
            for (i = 0; i < hidden.length; i++) {
                // Hide other sections
                hidden[i].classList.remove("active");
            }
        },
        saved: function () {
            console.log("saved");
        },
        search: function () {

            // formID = document.getElementById("searchForm");
            // getResults = document.getElementById("getResults");
            // minPrice = document.getElementById("minPrice");
            // maxPrice = document.getElementById("maxPrice");
            //
            // getResults.addEventListener("click", searchResults);
            // function searchResults() {
            //     minPriceValue = minPrice.options[ minPrice.selectedIndex ].value;
            //     maxPriceValue = maxPrice.options[ maxPrice.selectedIndex ].value;
            //     requests.searchRadius(minPriceValue, maxPriceValue);
            // }
        }
    };

})();