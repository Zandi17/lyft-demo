var cargarPagina = function() {
	if (navigator.geolocation) { 
		navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
	}

};

var funcionExito = function(posicion) {
	var lat = posicion.coords.latitude;
    var lon = posicion.coords.longitude;
    var latlon = new google.maps.LatLng(lat, lon);
    var mapa = document.getElementById('mapa');

    var myOptions = {
	    center:latlon,zoom:14,
	    mapTypeId:google.maps.MapTypeId.ROADMAP,
	    mapTypeControl:false,
	    navigationControlOptions:{
	    	style: google.maps.NavigationControlStyle.SMALL
	   	}
    };
    
    var map = new google.maps.Map(document.getElementById('mapa'), myOptions);

    var marker = new google.maps.Marker({
    	position:latlon,
    	map:map,
    	title:"Tu estas aqui."
    });

    var dir = "";
    var latlng = new google.maps.LatLng(lat, lon);
    geocoder = new google.maps.Geocoder();
    geocoder.geocode({"latLng": latlng}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
        if (results[0]) {
            dir = results[0].formatted_address;
        } else {
            dir = "No se ha podido obtener ninguna dirección en esas coordenadas.";
        }
    } 
    $("#direccion").text(dir);
    });
};
var buscar = function(buscar){
    var input = document.getElementById("inputBuscar");
    var searchBox = new google.maps.places.searchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input); 

    map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
    });
    }
    $("#buscar").click(buscar);

    
var funcionError = function (error) {
	alert("Lo sentimos no encontramos tu ubicación.");
};

$('.button-collapse').sideNav({
    menuWidth: 300, // Default is 240
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true // Choose whether you can drag to open on touch screens
});

$(document).ready(cargarPagina);
