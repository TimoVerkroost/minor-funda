// Routers we can access within the app
var routers = (function () {
    return {
        listen: function () {
            // Routers
            routie({
                "": function() {
                    // hide not selected sections
                    sections.hide();
                    // Show the selected section
                    sections.search();
                    // Add active to the section that needs te be displayed
                    document.getElementById("searchContainer").classList.add("active");
                },
                "bewaard": function() {
                    // hide not selected sections
                    sections.hide();
                    // Show the selected section
                    sections.saved();
                    // Add active to the section that needs te be displayed
                    document.getElementById("bewaard").classList.add("active");
                },
                'suggesties': function() {
                    // hide not selected sections
                    sections.hide();
                    // Show the selected section
                    sections.suggested();
                    // Add active to the section that needs te be displayed
                    document.getElementById("suggesties").classList.add("active");
                }
            });
        }
    };

})();