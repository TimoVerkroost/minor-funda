// Routers we can access within the app
var routers = (function () {
    return {
        listen: function () {
            // Routers
            routie({
                "bewaard": function() {
                    // hide not selected sections
                    sections.hide();
                    // Add active to the section that needs te be displayed
                    document.getElementById("bewaard").classList.add("active");
                },
                'suggesties': function() {
                    // hide not selected sections
                    sections.hide();
                    // Add active to the section that needs te be displayed
                    document.getElementById("suggesties").classList.add("active");
                }
            });
        },
        // Failed loads when data from API is NOT successfully loaded
        failed: function () {

        }
    };

})();