$(document).ready(function() {
    $(".load").fadeOut(3000);

    $("#btnext3").attr("disabled");

    $("#formulario").validate({
    	rules:{
    		celular:{
    			required: true,
    			digits : true,
    			minlength: 9
    		},
        },    
    	messages:{
    		celular:{
    			required:"Ingrese solo Números",
    			digits:"Ingresa tu Número de celular",
    			minlength : "Hasta 9 números"
    		},

    	},
        submitHandler: function() {
        window.localStorage.setItem("codigo", Math.floor( Math.random() * 4000 )+1000 )
        alert("Tu código es " + window.localStorage.getItem("codigo")  + " ");
        }
    });

    $("#btnext1").on("click", function(){
        $("#formulario").submit();
            if($("#ingreseNumero").val().length == 9){
                window.localStorage.setItem("celular", $("#ingreseNumero").val());
                window.location.href = "code.html";
            }
    });
    $("#code").on("click", function() {
        window.localStorage.setItem("codigo", Math.floor( Math.random() * 4000 )+1000 )
        alert("Tu nuevo código es " + window.localStorage.getItem("codigo")  + " ");
    })

    $("#celular").text(window.localStorage.getItem("celular"));

    $("#btnext2").on("click", function(){
        $("#formulario").submit();
            window.location.href = "register.html";
    });
    $("#form").validate({
        rules:{
            nombre: {
                required: true,
                digits: false,
                minlength: 2
            },
            apellido: {
                required: true,
                digits: false,
                minlength: 2
              },
            email: {
                required: true,
                digits: false,
                minlength: 2
            },
            box:{
                required:true,
            }
        },
        messages:{
            nombre: {
                required: "Campo Obligatorio",
                digits: "Ingresa tu nombre",
                minlength: "Escriba su nombre"
              },
            apellido: {
                required: "Campo Obligatorio",
                digits: "Ingresa tu Apellido",
                minlength: "Escriba su apellido"
              },
            email: {
                required: "El campo es requerido",
                digits: "Ingresa tu E-mail",
                minlength: "Escriba su Email",
            },
            box:{
                required:"Campo es requerido"
            }
        },
        submitHandler: function() {
            $("#btnext3").removeAttr("disabled");
        }
    });    


    $("#btnext3").on("click", function(){
       if($("#form").valid()){
            window.location.href = "mapa.html";
       }
    });

     $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    });
        

});




