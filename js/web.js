jQuery(document).ready(function($){
	var dockOptions ={ 
		align: 'top', // horizontal menu, with expansion DOWN from a fixed TOP edge
	    size: 100,
	    labels: true  // add labels (defaults to 'br')
    };
    
    var dockOptions3 ={ 
		align: 'top', // horizontal menu, with expansion DOWN from a fixed TOP edge
	    size:200,
	    labels: true  // add labels (defaults to 'br')
    };
	$('#botones').jqDock(dockOptions);
	$('.homeglobal').jqDock(dockOptions);
	$('#opcionprimeros').jqDock(dockOptions3);
	$('#opcionsegundos').jqDock(dockOptions3);

	$('#opcioninfantil').jqDock(dockOptions3);


	//------botones menu----------------------
	let inicio = $("#inicio");
	let homebutton = $("#home");
 	let cartabutton = $("#carta");
 	let vino = $("#vino");
 	let contacto = $("#contacto");
 	let espanol = $("#espanol");
 	let galeria = $("#galeria");
 	//------opciones de Carta-----------------
 	let seccioncarta = $("#seccioncarta");
 	let primeros = $("#opcionprimeros");
 	let segundos = $("#opcionsegundos");
 	let infantil = $("#opcioninfantil");
 	//-----sections------------------------------
 	let seccionprimeros= $("#sectionPrimeros");
 	let seccionsegundos= $("#sectionSegundos");
 	let seccioninfantil = $("#sectionInfantil");
	//-------vinos---------------------------
	let seccionvinos = $("#seccionvinos");
	//------galeria--------------------------
	let secciongaleria = $("#sectionGaleria");
	//------contactos----------------------------
	let seccioncontactos = $("#seccioncontactos");
	//-----homeglobal----------------------------
	let botonHome= $(".homeglobal");
	//seccionidioma--------------------------------
	let idioma = $("#idioma");

//CREAR AUDIO-----------------------------------------------


	var audio = document.createElement('audio');
	audio.src="sonidos/clic.mp3";
	$("#botones img").hover(()=>{
		audio.play();
});
	//$("#inicio").hide();
	    inicio.show();
		seccioncarta.hide();
        seccionvinos.hide();
        seccioncontactos.hide();
        seccionprimeros.hide();
        seccionsegundos.hide();
        seccioninfantil.hide();
        secciongaleria.hide();
        idioma.hide();

//---------HOME----------------------------------------


		homebutton.click(() => {
			
			inicio.show();
      		seccioncarta.hide();
	       	seccionvinos.hide();
	       	seccioncontactos.hide();
	       	seccionprimeros.hide();
	        seccionsegundos.hide();
	        seccioninfantil.hide();
	        secciongaleria.hide();
	        seccionprimeros.hide();
	        idioma.hide();
        	
        
      });
//---------CARTA---------------------------------------
        cartabutton.click(() => {
        	audio.play();
        	inicio.hide();
        	seccionprimeros.hide();
        	seccionsegundos.hide();
        	seccioninfantil.hide();
      		seccionvinos.hide();
        	seccioncontactos.hide();
	        secciongaleria.hide();
	        seccioncarta.show();
	        idioma.hide();
        
        
      });  

  
//---------CARTAPRIMEROS---------------------------------------
     	primeros.click(() => {
     		seccioncarta.hide();
     		seccionprimeros.show();
     	});

//---------CARTASEGUNDOS---------------------------------------
     	segundos.click(() => {
     		seccioncarta.hide();
     		seccionsegundos.show();
     	});
     	//---------CARTAINFANTIL---------------------------------------
     	infantil.click(() => {
     		seccioncarta.hide();
     		seccioninfantil.show();
     	});
//--------------VINOS---------------------------------------
     	vino.click(() => {
     		inicio.hide();
        	seccionprimeros.hide();
        	seccionsegundos.hide();
        	seccioninfantil.hide();
      		seccioncarta.hide();
		 	seccionvinos.hide();
        	seccioncontactos.hide();
            secciongaleria.hide();
            idioma.hide();
      		seccionvinos.show();	
       
     	});
//--------------CONTACTOS---------------------------------------
     	contacto.click(() => {
     		inicio.hide();
        	seccionprimeros.hide();
        	seccionsegundos.hide();
        	seccioninfantil.hide();
      		seccioncarta.hide();
		 	seccionvinos.hide();
        	seccioncontactos.hide();
            secciongaleria.hide();
      		seccionvinos.hide();
      		seccioncontactos.show();	
      		idioma.hide();
       
     	});
 //--------------HOMEGLOBAL-------------------------------
 		botonHome.click(() => {
 			inicio.show();
 			seccioncarta.hide();
	       	seccionvinos.hide();
	       	seccioncontactos.hide();
	       	seccionprimeros.hide();
	        seccionsegundos.hide();
	        seccioninfantil.hide();
	        secciongaleria.hide();
	        seccionprimeros.hide();
	        idioma.hide();
        	

 		});

//------------GALERIA---------------------------------
		galeria.click(() => {
			secciongaleria.show();
			inicio.hide();
 			seccioncarta.hide();
	       	seccionvinos.hide();
	       	seccioncontactos.hide();
	       	seccionprimeros.hide();
	        seccionsegundos.hide();
	        seccioninfantil.hide();
	        seccionprimeros.hide();
	        idioma.hide();
		});

	
	let indice = 0;	
	var arraysrcs = new Array ("imagenes/galeria/1.jpg", "imagenes/galeria/2.jpg", "imagenes/galeria/3.jpg");


	let botonderecha =$("#botonderecho");
	let botonizquierda =$("#botonizquierdo");

	function cambiarImagen(arraysrcs, i){
	let imagen = $("#imagengaleria img");
		

		imagen.attr("src", arraysrcs[i]);


}
	
	botonderecha.click(() => {
		

	if (indice >= arraysrcs.length -1) {
				indice = 0;
			}else{
				indice++;
			};

			cambiarImagen(arraysrcs, indice);
	});
	botonizquierda.click(() => {
		console.log(arraysrcs);

	if (indice == arraysrcs.length -1) {
				indice = 0;
			}else{
				indice++;
			};

			cambiarImagen(arraysrcs, indice);
	});


//----------ESPAÑOL-----------------------
espanol.click(() => {
			inicio.hide();
      		seccioncarta.hide();
	       	seccionvinos.hide();
	       	seccioncontactos.hide();
	       	seccionprimeros.hide();
	        seccionsegundos.hide();
	        seccioninfantil.hide();
	        secciongaleria.hide();
	        seccionprimeros.hide();
        	idioma.show();





       
var canv = document.getElementById("myCanvas");
var ctx = canv.getContext("2d");




ctx.font = "100px Palatino Linotype";
// Create gradient
var gradient = ctx.createLinearGradient(0, 0, canv.width, 0);
gradient.addColorStop("0"," white");
gradient.addColorStop("0.5", "red");
gradient.addColorStop("1.0", "white");
// Fill with gradient
ctx.fillStyle = gradient;
ctx.fillText("EN CONSTRUCCIÓN", 10, 90);

});


		});	
		
		
	
 
