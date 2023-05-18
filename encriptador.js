var botonEncriptar = document.querySelector(".btn-encriptar");
var muneco = document.querySelector(".contenedor-muneco");
var h3 = document.querySelector(".contenedor-h3");
var parrafo = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector("#resultado-final");
var botonDesencriptar = document.querySelector(".btn-desEncriptar");
var botonCopiar = document.getElementById('btn-copiar');


botonEncriptar.onclick = encriptar;

function encriptar() {
  ocultarSeccionDos();
  var area = recuperarTextoArea();
  resultado.textContent = encriptarTexto(area);  
}

function recuperarTextoArea() {
  var area = document.querySelector(".area");
  return area.value;
}

function ocultarSeccionDos() {
  muneco.classList.add("ocultar");
  h3.classList.add("ocultar");
  parrafo.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
  var texto = mensaje;
  var textoFinal = "";
 /* La letra "e" es convertida para "enter"
  La letra "i" es convertida para "imes"
  La letra "a" es convertida para "ai"
  La letra "o" es convertida para "ober"
  La letra "u" es convertida para "ufat"*/

  for (var indice = 0; indice < texto.length; indice++){
    else if (texto[indice] == "e") {
        textoFinal = textoFinal + "enter"
    }
    else if (texto[indice] == "é") {
        textoFinal = textoFinal + "enter"
    }
    else if (texto[indice] == "i") {
        textoFinal = textoFinal + "imes"
    }
    else if (texto[indice] == "í") {
        textoFinal = textoFinal + "imes"
    }
    if (texto[indice] == "a") {
        textoFinal = textoFinal + "ai"
    }
    else if(texto[indice] == "á") {
        textoFinal = textoFinal + "ai"
    } 
        else if (texto[indice] == "o") {
        textoFinal = textoFinal + "ober"
    }
    else if (texto[indice] == "ó") {
        textoFinal = textoFinal + "ober"
    }
    else if (texto[indice] == "u") {
        textoFinal = textoFinal + "ufat"
    }
    else if (texto[indice] == "ú") {
        textoFinal = textoFinal + "ufat"
    }
    else {
        textoFinal = textoFinal + texto[indice];
    } 
  }
  return textoFinal.toLowerCase();  
}
botonDesencriptar.onclick = desEncriptar;

function desEncriptar() {
  ocultarSeccionDos();
  var area = recuperarInf();
  resultado.textContent = desEncriptarTexto(area);
}

function recuperarInf() {
  var inf = document.querySelector('.area');//recuperar text area
  return inf.value.toLowerCase();
}

function ocultarSeccionDos() {
    muneco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function desEncriptarTexto(mensaje) {
  var texto = mensaje;
  var textoFinal ="";

  for (var indice = 0; indice < texto.length; indice++){
    if (texto[indice] == "a") {
      textoFinal = textoFinal + "a"
      indice = indice + 1;
    }
    else if (texto[indice] == "e") {
      textoFinal = textoFinal + "e"
      indice = indice + 4;
    }
    else if (texto[indice] == "i") {
      textoFinal = textoFinal + "i"
      indice = indice + 3;
    }
    else if (texto[indice] == "o") {
      textoFinal = textoFinal + "o"
      indice = indice + 3;
    }
    else if (texto[indice] == "u") {
      textoFinal = textoFinal + "u"
      indice = indice + 3;
    }
    else {
      textoFinal = textoFinal + texto[indice];
    }
  }
  return textoFinal;
}

botonCopiar.onclick = copiarPortaPapeles;

function limpiarTextarea() {
  var textarea = document.getElementById('areaPrincipal'); 
  textarea.value = ''; // Limpia el contenido del textarea
}

function copiarPortaPapeles() {
  var texto = document.getElementById('resultado-final');
  texto.select(); //texto seleccionado
  try {
    var successful = document.execCommand('copy'); // Copiando
    if (successful) {
      texto.innerHTML = 'Texto copiado con éxito!';
      limpiarTextarea(); // Limpia el textarea después de copiar
    } else {
      texto.innerHTML = 'texto no copiado!';
    }
  } catch (err) {
    texto.innerHTML = 'Browser no soportado!';
  }
}






