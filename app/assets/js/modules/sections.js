// Sections
var sections = (function () {
    var hidden,
        i,
        formInput,
        searchFieldInput,
        range,
        buildYear,
        haveResults,
        noResults;
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
        },
        search: function () {
            haveResults = document.getElementById('haveSearchResults');
            noResults = document.getElementById('noSearchResults');
            // Get form with input values of user
            formInput = document.getElementById('searchFields');
            // To prevent duplicate eventListeners
            formInput.removeEventListener("submit", getFormValues);
            // On submit get values
            formInput.addEventListener("submit", getFormValues);
            // FormInput function
            function getFormValues(event) {
                // Prevent default submit
                event.preventDefault();
                // Get search input value and set in localStorage to use everywhere in the application
                searchFieldInput = document.getElementById('searchField').value;
                localStorage.setItem("fundaPlace", searchFieldInput);
                // Get range input value and set in localStorage to use everywhere in the application
                range = document.getElementById('range').value;
                localStorage.setItem("fundaRange", range);
                // Get buildYear input value and set in localStorage to use everywhere in the application
                buildYear = document.getElementById('buildYear').value;
                localStorage.setItem("fundaBuildYear", buildYear);
                // Request search
                requests.search();
                // Hide no results and show results
                noResults.classList.add("hide");
                haveResults.classList.add("show");
                // Remove old classes
                noResults.classList.remove("show");
                haveResults.classList.remove("hide");
            }
            // Loaded last search from storage
            if (localStorage.getItem("fundaPlace") != null) {
                requests.search();
                // Hide no results and show results
                noResults.classList.add("hide");
                haveResults.classList.add("show");
                // Remove old classes
                noResults.classList.remove("show");
                haveResults.classList.remove("hide");
            } else {
                // Hide results and show no results
                noResults.classList.add("show");
                haveResults.classList.add("hide");
                // Remove old classes
                noResults.classList.remove("hide");
                haveResults.classList.remove("show");
            }
        },
        suggested: function () {
            requests.getSuggestedHomes();
        }
    };

})();