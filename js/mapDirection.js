window.Lat;
window.Lng;

function initMap() {
    // Init auto-complete
	initAutocomplete();
	
	var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
	
	map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 6
        });
		directionsDisplay.setMap(map);
        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
		
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            window.Lat = position.coords.latitude;
			window.Lng = position.coords.longitude;
			
			var pos = {
              lat: window.Lat,
              lng: window.Lng
            };
			
            infoWindow.setPosition(pos);
            infoWindow.setContent('You are here');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
				handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
		
		var onChangeHandler = function() {
			calculateAndDisplayRoute(directionsService, directionsDisplay);
        };
		//Press Button to find direction
		document.getElementById('Go').addEventListener('click', onChangeHandler);
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }


function calculateAndDisplayRoute(directionsService, directionsDisplay) {
	directionsService.route({
		origin: window.Lat.toString()+','+window.Lng.toString(),
		destination: document.getElementById('autocomplete').value,
		travelMode: 'DRIVING'
    }, function(response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
        } else {
			alert('Directions request failed due to ' + status);
        }
       });
}