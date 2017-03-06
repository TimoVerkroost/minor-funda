// Sections
var sections = (function () {
    var hidden,
        i;
    return {
        hide: function () {
            // Hide other sections
            hidden = document.getElementsByTagName("section");
            // Loop in all sections
            for (i = 0; i < hidden.length; i++) {
                // Hide other sections
                hidden[i].classList.remove("active");
            }
        }
    };

})();