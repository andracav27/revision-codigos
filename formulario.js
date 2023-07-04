//Andrea Lizeth Andraca Vazquez
//CALIFICACION 3/5
var formulario = document.querySelector("form");

formulario.onsubmit = function(e) {

  e.preventDefault();
  
  var nombre = formulario.elements.name;
  var edad = formulario.elements.age;
  var nacionalidad = formulario.elements.nationality;

  var nombreValor = nombre.value;
  var edadValor = edad.value;

  var nacionalidades = nacionalidad.selectedIndex;
  var nacionalidadValor = nacionalidad.options[nacionalidades].value;
  console.log(nombreValor, edadValor);
  console.log(nacionalidadValor);

  if (nombreValor.lenght === 0) {
    nombre.classList.add("error");
  }
  if (edad < 18 ||  edad > 120) {
    edad.classList.add("error");
  }

if (nombreValor.lenght > 0  && (edad >= 18 && edadValor <= 120)) {
  agregarInvitado(nombreValor, edadValor, nacionalidadValor);
  }
}

var lista = documento.getElementBy("lista-de-invitados");
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = documento.createElement("br")
documento.cuerpo.appendChild(corteLinea)
documento.cuerpo.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"; 
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

var lista = documento.getElementById("lista-de-invitados")

var elementoLista = documento.createElement("div");
elementoLista.classList.add("elemento-lista")
lista.appendChild(elementoLista)

var spanNombre = documento.createElement("span")
var inputNombre = documento.createElement("input")
var espacio = documento.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.valor = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)

}

function crearElemento(descripcion, valor) {
var spanNombre = documento.createElement("span")
var inputNombre = documento.createElement("input")
var espacio = documento.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre. valor = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)


crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)
}

var botonBorrar = documento.createElement("botón")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = documento.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

function botonBorrar()onclick = función() 
{
this.parentNode.style.display = 'none';
botonBorrar.parentNode.eliminar()
}

