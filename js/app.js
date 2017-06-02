/*
 * Archivo principal de JS
 */

 function modalImagen(images/portfolio){
 	var img1 = document.createElement("div");
 	var img2 = document.createElement("div");
 	var img = document.createElement("img");
 	img.src = img;
 	img.style.width = "80%";
 	img1.appendChild(img2);
 	img2.appendChild(img);
 	img1.className = "contenedor-modal"
 	img2.className = "modal";
 	var cerrar = document.createElement("div");
 	var x = document.createTextNode("X");
 	cerrar.appendChild(x);
 	cerrar.className = "cerrar";
 	cerrar.addEventListener("click", function(){
 		img1.style.visibility = "hidden";
 	});
 	img2.appendChild(cerrar);
 	document.body.appendChild(img1);
 	return img1;
 }

 function mostrar(obj){
 	obj.style.visibility = "visible";
 }

 var modalImag = modalImagen("images/portfolio");

 function validacion(){
 	var nombre = document.getElementById("name").value;
 	var email = document.getElementById("email").value;
 	var fono = document.getElementById("tel").value;

 	if(nombre == ""){
 		alert("escribe tu nombre");
 		return;
 	}

 	if(email == ""){
 		alert("escribe tu mail");
 		return;
 	}

 	if(fono == ""){
 		alert("escribe tu telefono");
 		return;
 	}

 	if(fono != parseInt(fono)){
 		alert("escribe un numero válido de telefono 569123456");
 		return;
 	}
 }