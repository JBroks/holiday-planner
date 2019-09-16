var google;

var countryRestrict;
var autocomplete;
var map, places;
var options = {
    'hotel': {
        types: ['lodging']
    },
    'restaurant': {
        types: ['restaurant', 'bar', 'cafe']
    },
    'attraction': {
        types: ['museum', 'art_gallery', 'park', 'amusement_park']
    }
};
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
var markers = [];
var MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/images/marker_green';

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


    // Create the autocomplete object and associate it with the UI input control.
    // Restrict the search to the default country, and to place type "cities".
    autocomplete = new google.maps.places.Autocomplete(
        (document.getElementById('city-input')), {
            types: ['(cities)'],
            componentRestrictions: countryRestrict
        });
    places = new google.maps.places.PlacesService(map);

    autocomplete.addListener('place_changed', onPlaceChanged);

    document.getElementById('place-type').addEventListener('change', search);



    // Add a DOM event listener to react when the user selects a country.
    document.getElementById('country').addEventListener(
        'change', setAutocompleteCountry);

}

// When the user selects a city, get the place details for the city and
// zoom the map in on the city.
function onPlaceChanged() {
    var place = autocomplete.getPlace();
    if (place.geometry) {
        map.panTo(place.geometry.location);
        map.setZoom(15);
        search();
    } 
}

// Search for hotels in the selected city, within the viewport of the map.
function search() {
    var option = document.getElementById('place-type').value;
    var search = {
        bounds: map.getBounds(),
        types: options[option].types
    };


    places.nearbySearch(search, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearMarkers();
            // Create a marker for each hotel found, and
            // assign a letter of the alphabetic to each marker icon.
            for (var i = 0; i < results.length; i++) {
                var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
                var markerIcon = MARKER_PATH + markerLetter + '.png';
                // Use marker animation to drop the icons incrementally on the map.
                markers[i] = new google.maps.Marker({
                    position: results[i].geometry.location,
                    animation: google.maps.Animation.DROP,
                    icon: markerIcon
                });
                // If the user clicks a hotel marker, show the details of that hotel
                // in an info window.
                markers[i].placeResult = results[i];
                // google.maps.event.addListener(markers[i], 'click', showInfoWindow);
                setTimeout(dropMarker(i), i * 100);
            }
        }
    });
}

function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
        if (markers[i]) {
            markers[i].setMap(null);
        }
    }
    markers = [];
}

// Set the country restriction based on user input.
// Also center and zoom the map on the given country.
function setAutocompleteCountry() {

    var country = document.getElementById('country').value;
    autocomplete.setComponentRestrictions({ 'country': country });
    map.setCenter(countries[country].center);
    map.setZoom(countries[country].zoom);

    clearMarkers();

}

function dropMarker(i) {
    return function() {
        markers[i].setMap(map);
    };
}
