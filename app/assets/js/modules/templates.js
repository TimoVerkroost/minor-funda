// Templates with engine
var templates = (function () {
    var searchObjects;
    var searchObject;

    var suggestedObjects;
    var suggestedObject;

    var tinyObjects;
    var tinyObject;
    return {
        // Search list
        searchList: function (response) {
            searchObjects = response.Objects;
            searchObject = {
                mainImage: {
                    src: function() {
                        return this.FotoLarge;
                    }
                },
                title: {
                    text: function() {
                        return this.Adres;
                    }
                },
                address: {
                    text: function() {
                        return this.Postcode + " " + this.Woonplaats;
                    }
                },
                price: {
                    innerHTML: function() {
                        return this.PrijsGeformatteerdHtml;
                    }
                },
                area: {
                    text: function() {
                        return this.Woonoppervlakte + "m\u00B2";
                    }
                },
                rooms: {
                    text: function() {
                        return this.AantalKamers + " kamers";
                    }
                }
            };

            Transparency.render(document.getElementById('searchResults'), searchObjects, searchObject);
        },
        // Suggested list
        suggestedList: function (response) {
            suggestedObjects = response.Objects;
            suggestedObject = {
                mainImage: {
                    src: function() {
                        return this.FotoLarge;
                    }
                },
                title: {
                    text: function() {
                        return this.Adres;
                    }
                },
                address: {
                    text: function() {
                        return this.Postcode + " " + this.Woonplaats;
                    }
                },
                price: {
                    innerHTML: function() {
                        return this.PrijsGeformatteerdHtml;
                    }
                },
                area: {
                    text: function() {
                        return this.Woonoppervlakte + "m\u00B2";
                    }
                },
                rooms: {
                    text: function() {
                        return this.AantalKamers + " kamers";
                    }
                }
            };

            Transparency.render(document.getElementById('suggestieResults'), suggestedObjects, suggestedObject);
        },
        // With tiny ID API generated template
        tinyDetailList: function (response) {
            tinyObjects = response;
            tinyObject = {
                mainImage: {
                    src: function() {
                        // Make image source
                        return "http://cloud.funda.nl/valentina_media"+ this.img.slice(0, this.img.indexOf(".")) + "_groot.jpg";
                    }
                },
                title: {
                    text: function() {
                        return this.adr;
                    }
                },
                address: {
                    text: function() {
                        return this.pc + " " + this.wp;
                    }
                },
                price: {
                    innerHTML: function() {
                        return this.prs;
                    }
                },
                area: {
                    text: function() {
                        return this.wo + "m\u00B2";
                    }
                },
                rooms: {
                    text: function() {
                        return this.kmr;
                    }
                }
            };

            Transparency.render(document.getElementById('bewaardResults'), tinyObjects, tinyObject);
        }
    };

})();