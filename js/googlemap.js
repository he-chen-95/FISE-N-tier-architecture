$(document).ready(function(){

    window.Lat;
    window.Lng;

        var directionDisplay = new google.maps.DirectionsRenderer();
        var directionService = new google.maps.DirectionsService();
        
        var map;
        
        var stetienne = new google.maps.LatLng(45.439695, 4.3871779);
        var myhome = new google.maps.LatLng(48.84216, 2.29277);
        var pos = {
              lat: window.Lat,
              lng: window.Lng
            };
            
        var mapOptions = {
            zoom: 12,
            center: stetienne
        };

        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        
    
        directionDisplay.setMap(map);
        
        function calculateRoute(){
            var request = {
                origin: pos,
                destination: myhome,
                travelMode: 'DRIVING'
            };
            
            directionService.route(request, function(result, status){
            
                console.log(result, status);

                if(status = "OK"){
                    directionDisplay.setDirections(result);
                }
            });
        }
        
        document.getElementById('get').onclick = function(){
            calculateRoute();
        };

});