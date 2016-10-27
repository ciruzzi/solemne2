 var videoSrcArr = new Array("Arica","Tarapaca","Antofagasta","Atacama","Coquimbo",
 	"Valparaiso","Metropolitana","Bernardo O'higgins","Maule","Bio-Bio","Araucania","Los Rios","Los Lagos","Aysen","Magallanes"),
 selectEl = document.getElementById('region');
 for(var i = 0; i < videoSrcArr.length; i++){ 
 	selectEl.options.add(new Option(videoSrcArr[i], videoSrcArr[i]));
  } 
  function show(seleccion) { 
  	var zeta = seleccion.nombre;
  	if(zeta.value.charAt(0)=='A'){
  	  document.getElementById('notice').innerHTML = "No se encuentra disponible en: "+ zeta.value;
  	} 
  	else{
  	  document.getElementById('notice').innerHTML = "Estamos presente en: "+ zeta.value;
  	}	 	  	}
