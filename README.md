![funda_logo](https://github.com/TimoVerkroost/minor-funda/blob/master/images/fundawonen-logo.png "Funda logo")

# Prototype a new search functionality for Funda
Use the APIs of Funda to get your own ideas and understanding a new way of seeking homes. A list, on a map, or another way, everything is worth considering! The aim is to help the Funda user to find their perfect home quickly and easily.

## User story
As Funda user I want to get suggestions of homes that I think might be interesting, so I get that offer just outside my search.


## Why does this application have a purpose?
User get new suggestions for homes that they doesn't think of at first. This can lead to more views at homes that normally not founded at first. This can be a benefit for Funda and the user/ home searcher.

## How does it works
1. The user already saved some homes that he or she likes, from this home we get the average price, square feet and rooms.
2. When the user searches for homes he or she is using some filters, this filters will be saved.
3. Combine the saved homes and search filters to generate suggested homes that the user possibly likes.

## Usage
config.js - in this file the API settings are defined without it the application doesn't work.
```js
var config = {
    apiURL: "API_URL",
    kyrandiaURL: "API_URL_PROXY",
    autoSuggestURL: "AutoSuggest_API_URL",
    mapApiURL: "FundaMaps_API_URL",
    apiKey: "API_Key"
};
```

Load all modules in HTML.
```html
<!-- HTML -->
        <script src="assets/js/config.js"></script>
        <script src="assets/js/vendors/routie.min.js"></script>
        <script src="assets/js/vendors/transparency.min.js"></script>
        <script src="assets/js/vendors/aja.min.js"></script>
        <script src="assets/js/modules/templates.js"></script>
        <script src="assets/js/modules/requests.js"></script>
        <script src="assets/js/modules/routes.js"></script>
        <script src="assets/js/modules/suggestions.js"></script>
        <script src="assets/js/modules/sections.js"></script>
        <script src="assets/js/app.js"></script>
    </body>
</html>
```

## Interaction diagram
![interaction_diagram](https://github.com/TimoVerkroost/minor-funda/blob/master/images/interaction_diagram.png "Interaction diagram")

## Resources
The application is mostly build with native JavaScript only 2 micro libraries are added. beside the JavaScript, the application gets it's information from an external API.
- [Aja.js](http://krampstudio.com/aja.js/) - Ajax without XML Asynchronous JavaScript And JSON.
- [TransparencyJS](https://github.com/leonidas/transparency) - A semantic template engine for the browser. It maps JSON objects to DOM elements by id, class and data-bind attributes.
- [Routie](https://github.com/jgallen23/routie) - A tiny javascript hash router.
- [Funda API](http://www.funda.nl/) - Database for houses that are for sell, hire, enz..

## Wishlist
- Infinite scroll or pagination to get more then 25 results.
- Make suggestions also based on type of home.
- Expand search with; huur, nieuwbouw, recreatie and europa (now it is only "koop").
- Implement the suggestion in Funda.nl website.
- More variables to make suggestions.
- Under the hood generated objects that only contains the needed information to generate the suggestions.
- Filter out the suggestions that are also in the search.