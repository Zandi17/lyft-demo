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
        $("#digito").submit();
            var digi1 = $("#digito1").val();
            var digi2 = $("#digito2").val();
            var digi3 = $("#digito3").val();
            var digi4 = $("#digito4").val();                
            var digitos= digi1 + digi2 + digi3+digi4;
            if(digitos == window.localStorage.getItem("codigo")){
            window.location.href = "register.html";
        }
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

});

// var generarCodigo = function(){
//     var longitud = $("#input-celular").val().length;
//     if(longitud == 9){
//         window.localStorage.setItem("numeroAleatorio", Math.round(Math.random()*900)+99);
//         alert("LAB - " + window.localStorage.getItem("numeroAleatorio"));
//         window.localStorage.setItem("celular", $("#input-celular").val());
//     }
// }
// var comprobarCodigo = function(){
//     var codigo1 = $(".input-codigo").eq(0).val();
//     var codigo2 = $(".input-codigo").eq(1).val();
//     var codigo3 = $(".input-codigo").eq(2).val();
//     var codigo = codigo1 + codigo2 + codigo3;
//     var cuadradoNegro = $("#cuadrado-negro");
//     if(codigo == window.localStorage.getItem("numeroAleatorio")){
//             $("#codigo-comprobado").attr("href", "register.html");
//         } else {
//             $("#codigo-comprobado").removeAttr("href");
//             cuadradoNegro.text("Código erróneo");
//             cuadradoNegro.removeClass("ocultar");
//             $(".input-codigo").val("");
//             $(".input-codigo").eq(0).focus();
//             setTimeout(function(){ cuadradoNegro.addClass("ocultar"); }, 3000)
//         }
// }
// var onKeydownCodigo = function(evento){
//     var ascii = evento.keyCode;
//     var longitud = $(this).val().length;
//     if((ascii>=48 && ascii<=57  && longitud==0) || ascii==8){
//         return true;
//     } else{
//         return false;
//     }
// }
// var onkeyupCodigo = function(evento){
//     var longitud = $(this).val().length;
//     var ascii = evento.keyCode;
//     if(longitud==1){
//         $(this).next().focus();
//     }
//     if(ascii==8){
//         $(this).prev().focus();
//     }
// }
// var generarCodigo2 = function(){
//     window.localStorage.setItem("numeroAleatorio", Math.round(Math.random()*900)+99);
//     alert("LAB - " + window.localStorage.getItem("numeroAleatorio"));
//     $(".input-codigo").val("");
//     $(".input-codigo").eq(0).focus();
//     $("#input-correo").focus();
// }
// var mayusculas = function(){
//     var valor = $(this).val();
//     var primeraLetraMayusc = valor.charAt(0).toUpperCase();
//     var valorMayusc = primeraLetraMayusc + valor.substr(1,valor.length);
//     $(this).val(valorMayusc);
// }
// var soloLetras = function(evento){
//     var ascii = evento.keyCode;
//     if ((ascii<97 || ascii>122) && (ascii<65 || ascii>90) && ascii!=45 && ascii!=241 && ascii!=209 && ascii!=32 && ascii!=225 && ascii!=233 && ascii!=237 && ascii!=243 && ascii!=250 && ascii!=193 && ascii!=201 && ascii!=205 && ascii!=211 && ascii!=218 && ascii!=91){
//         return false;
//     }
//     else{
//         return true;
//     }
// }



