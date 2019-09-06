var google;

var countryRestrict;
var autocomplete;
var map, places;
var countries = {
    'all': {
        center: { lat: 45.4, lng: 0 },
        zoom: 2.9
    },
    'au': {
        center: { lat: -25.3, lng: 133.8 },
        zoom: 4
    },
    'br': {
        center: { lat: -14.2, lng: -51.9 },
        zoom: 4
    },
    'ca': {
        center: { lat: 62, lng: -110.0 },
        zoom: 3.5
    },
    'eg': {
        center: { lat: 26.2, lng: 30.3 },
        zoom: 6
    },
    'gr': {
        center: { lat: 39.2, lng: 22.5 },
        zoom: 6.5
    },
    'mx': {
        center: { lat: 23.6, lng: -102.5 },
        zoom: 5
    },
    'nz': {
        center: { lat: -40.9, lng: 174.9 },
        zoom: 5.5
    },
    'it': {
        center: { lat: 41.9, lng: 12.6 },
        zoom: 6
    },
    'za': {
        center: { lat: -30.6, lng: 22.9 },
        zoom: 5
    },
    'es': {
        center: { lat: 40.5, lng: -3.7 },
        zoom: 6
    },
    'tr': {
        center: { lat: 39.2, lng: 35.5 },
        zoom: 6
    },
    'us': {
        center: { lat: 37.1, lng: -95.7 },
        zoom: 4.5
    }
};

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: countries['all'].zoom,
        center: countries['all'].center,
        mapTypeControl: false,
        panControl: false,
        zoomControl: false,
        streetViewControl: false,
        mapTypeId: 'roadmap',
        styles: [{
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#fbeec1"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#659dbd"
                }]
            }
        ]

    });

    // Add a DOM event listener to react when the user selects a country.
    document.getElementById('country').addEventListener(
        'change', setAutocompleteCountry);

    // Create the autocomplete object and associate it with the UI input control.
    // Restrict the search to the default country, and to place type "cities".
    autocomplete = new google.maps.places.Autocomplete(
        (document.getElementById('city-input')), {
            types: ['(cities)'],
            componentRestrictions: countryRestrict
        });

    autocomplete.addListener('place_changed', onPlaceChanged);

    // Set the country restriction based on user input.
    // Also center and zoom the map on the given country.
    function setAutocompleteCountry() {

        var country = document.getElementById('country').value;
        autocomplete.setComponentRestrictions({ 'country': country });
        map.setCenter(countries[country].center);
        map.setZoom(countries[country].zoom);

    }

    // When the user selects a city, get the place details for the city and
    // zoom the map in on the city.
    function onPlaceChanged() {
        var place = autocomplete.getPlace();
        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(15);
        }
    }

}
