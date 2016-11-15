$(document).ready(function() {
    var map,lon,lat;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(posicion) {
            lat = posicion.coords.latitude;
            lon = posicion.coords.longitude;
            map = new GMaps({
                div: "#mapa",
                lat: lat,
                lng: lon, 
                zoom:15,
                mapTypeControl:false,
                zoomControl: false,
                streetViewControl:false
            });
            var geocoder = new google.maps.Geocoder;

            map.addMarker({
                lat: lat,
                lng: lon,
            });
        });
    };

    
    $("#buscar").on("click", function () {
        GMaps.geocode({
            address: $('#address').val(),
            callback: function(results, status) {
                if (status == 'OK') {
                var latlng = results[0].geometry.location;
                map.setCenter(latlng.lat(), latlng.lng());
                map.addMarker({
                    lat: latlng.lat(),
                    lng: latlng.lng()
                });
                }
            }
        });
    });
   
    $("#direccion").text(function(){
        var dir = "";
        var latlng = new google.maps.LatLng(lat, lon);
        geocoder = new google.maps.Geocoder();
        geocoder.geocode({"latLng": latlng}, function(results, status){
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
                dir = "<p><strong>Dirección: </strong>" + results[0].formatted_address + "</p>";
            } else {
                dir = "<p>No se ha podido obtener ninguna dirección en esas coordenadas.</p>";
            }
        } 
            content.text = "<p><strong>Latitud:</strong> " + lat + "</p><p><strong>Longitud:</strong> " + lon + "</p>" + dir;
        });
    });
    
    $('.button-collapse').sideNav({
          menuWidth: 300, // Default is 240
          edge: 'left', // Choose the horizontal origin
          closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
          draggable: true // Choose whether you can drag to open on touch screens
    });
});
