<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 221.7 78.8" style="enable-background:new 0 0 221.7 78.8;" xml:space="preserve">
<path style="fill:#FFFFFF;" d="M31.8,11.3h155.5v55.1H31.8V11.3z"/>
<g>
	<path style="fill:#53241B;" d="M137.8,34.4c-5,0-5.3,4.1-5.3,8.2s0.3,8.3,5.3,8.3s5.2-4.4,5.2-8.3C143,38.8,142.7,34.4,137.8,34.4z
		 M160.5,47.9c0,1.8,1.4,3.3,5,3.3c4.4,0,6-0.5,6-4.6v-1.9h-6.4C162,44.7,160.5,45.9,160.5,47.9z"/>
	<path style="fill:#53241B;" d="M196.7,33.5C192.6,19.6,179.2,12,167.9,12H15.8c2.8,10,9.1,33,9.1,33.1
		c3.9,13.4,16.8,21.4,28.3,21.4h152.6C204.8,62.7,196.7,33.7,196.7,33.5z M60.9,23.7H57c-1.7,0-2.3,0.6-2.3,2.2v3.5h6.2v4.1h-6.2
		v22.4h-5.3V33.5h-4.9l-1.2-4.1h6.1v-3.5c0-5,3.1-7.2,7.2-7.2h4.3C60.9,18.7,60.9,23.7,60.9,23.7z M88.7,55.9h-5.3v-2.8h-0.1
		c-1.7,2.1-4.1,3.1-6.8,3.1c-4.2,0-8.9-3.2-8.9-9.2V29.4h5.3v15.8c0,3.6,2.2,5.7,5.3,5.7c3,0,5.2-2.1,5.2-5.7V29.4h5.3V55.9z
		 M119.3,55.9H114V40.1c0-3.6-2.2-5.7-5.2-5.7s-5.3,2.1-5.3,5.7v15.8h-5.3V29.4h5.3v2.8h0.1c1.7-2.1,4.1-3.1,6.9-3.1
		c4.1,0,8.8,3.2,8.8,9.2C119.3,38.3,119.3,55.9,119.3,55.9z M148.3,55.9H143v-2.8c-1.7,1.8-4.1,3.1-6.8,3.1c-3.2,0-5.6-1.5-7.1-3.4
		s-1.9-3.6-1.9-10.1s0.4-8.2,1.9-10.1c1.5-2,3.9-3.5,7.1-3.5c2.7,0,4.9,1.3,6.8,3.1V18.7h5.3L148.3,55.9L148.3,55.9z M176.9,55.9
		h-5.3v-2.4h-0.1c-1.1,1.8-2.9,2.7-6.5,2.7c-5.9,0-9.4-3.5-9.4-8.1c0-4.2,2.9-7.8,8.6-7.8h7.4v-2.8c0-2.5-1.6-3.4-5.4-3.4
		c-2.8,0-4.1,0.5-5,2l-4.2-3.2c2-2.8,5-3.9,8.9-3.9c6.5,0,11,2.2,11,8.7C176.9,37.7,176.9,55.9,176.9,55.9z"/>
</g>
<path style="fill:#60C5F8;" d="M52.9,78.5l0.1,0.3h168.8l-0.1-0.3l-13.4-48.3C202.7,11.2,184.6,0,167.9,0H0l13.4,48.3v0.1
	C18.9,67.6,37.1,78.3,52.9,78.5z M167.9,12c11.3,0,24.8,7.6,28.8,21.5c0,0.1,8.1,29.2,9.1,33H53.2c-11.5,0-24.4-8-28.3-21.4
	c0-0.1-6.4-23-9.1-33.1H167.9L167.9,12z"/>
</svg>

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
<script src="assets/js/routie.min.js"></script>
<script src="assets/js/transparency.min.js"></script>
<script src="assets/js/aja.min.js"></script>
<script src="assets/js/modules/templates.js"></script>
<script src="assets/js/modules/requests.js"></script>
<script src="assets/js/modules/routes.js"></script>
<script src="assets/js/modules/suggestions.js"></script>
<script src="assets/js/modules/sections.js"></script>
<script src="assets/js/app.js"></script>
```

## Resources
The application is mostly build with native JavaScript only 2 micro libraries are added. beside the JavaScript, the application gets it's information from an external API.
- [Aja.js](http://krampstudio.com/aja.js/) - Ajax without XML Asynchronous JavaScript And JSON.
- [TransparencyJS](https://github.com/leonidas/transparency) - A semantic template engine for the browser. It maps JSON objects to DOM elements by id, class and data-bind attributes.
- [Routie](https://github.com/jgallen23/routie) - A tiny javascript hash router.

## Wishlist
- Infinite scroll or pagination to get more then 25 results.
- Make suggestions also based on type of home.
- Expand search with; huur, nieuwbouw, recreatie and europa (now it is only "koop").
- Implement the suggestion in Funda.nl website.
- More variables to make suggestions.
- Under the hood generated objects that only contains the needed information to generate the suggestions.