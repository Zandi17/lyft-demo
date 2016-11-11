$(document).ready(function() {
    $(".load").fadeOut(3000);

	$("#ingreseNumero").keypress(function(e){;
		var tecla = e.keyCode;
		if((tecla >= 48 && tecla <= 57) || tecla == 8){
			return true;
		}
		else 
			return false;
	});

	$('#next1').click(function(){
		var tel = document.getElementById("ingreseNumero").value;
		localStorage.setItem("celular", tel);
	});
	$("#ingreseNumero").keyup(function(e){;
	var caracteres = $(e.target).val().length;
	var tecla = e.keyCode;
	if (caracteres == 9){
		$("#next1").attr("href", "code.html");
		$("#next1").click(generarCod);
	}
	else{
		$("#next1").removeAttr("href");
		$("#next1").unbind("click");
	}
})	

	var generarCod = function(){
	if(entra){
		for (var i = 0; i < 4; i++) {
			var nums = Math.round(Math.random()*9);
			codigo += nums;
		}

		alert(codigo);

		localStorage.setItem("guardarCod", codigo);

		var obtNum = $("#ingreseNumero").val();
		localStorage.setItem("celular", obtNum);

		var rutaVeri = local.href.indexOf("code.html");
		if (rutaVeri < 0) {
			entra = false;
		}
	}
}

});














