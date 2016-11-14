$(document).ready(function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(posicion) {
           var lat = posicion.coords.latitude;
           var lon = posicion.coords.longitude;
           var map = new GMaps({
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

    // var content = $("#direccion");
    // var dir = "";
    // var latlng = new google.maps.LatLng(lat, lon);
    // geocoder = new google.maps.Geocoder();
    // geocoder.geocode({"latLng": latlng}, function(resultado, estado){
    //     if (estado == google.maps.GeocoderStatus.OK){
    //         if (resultado[0]){
    //             dir = resultado[0].formatted_address;
    //         }
    //         else{
    //             dir = "No se ha podido obtener ninguna dirección en esas coordenadas.";
    //         }
    //     }
    //     else{
    //         dir = "El Servicio de Codificación Geográfica ha fallado con el siguiente error: " + estado;
    //     }
    //     window.localStorage.setItem("direccion",dir)
    //     content.text(window.localStorage.getItem("direccion"));
    // });

    
     $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    });
});

