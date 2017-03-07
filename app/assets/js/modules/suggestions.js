// Suggestions
var suggestions = (function () {
    var averagePrice;
    var averageSurface;
    var averageRooms;
    return {
        calculate: function (items) {
            // Average price of saved home
            averagePrice = items.reduce(function(buffer, objectItem) {
                return Number(buffer) + Number(objectItem.Koopprijs);
            }, "");
            averagePrice = Math.round(averagePrice / items.length);

            // Average surface (m2) of saved home
            averageSurface = items.reduce(function(buffer, objectItem) {
                return Number(buffer) + Number(objectItem.WoonOppervlakte);
            }, "");
            averageSurface = Math.round(averageSurface / items.length);

            // Average rooms of saved home
            averageRooms = items.reduce(function(buffer, objectItem) {
                return Number(buffer) + Number(objectItem.AantalKamers);
            }, "");
            averageRooms = Math.round(averageRooms / items.length);

            requests.getSuggestedHomes(averagePrice, averageSurface, averageRooms);
        }
    };

})();
