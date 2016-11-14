$(document).ready(function(posicion) {
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

// }
}