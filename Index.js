// definimos las 2 constantes a utilizar "un array y un objeto" tambien podriamos llamarlos artefactos
let pregunta = {};
const encuesta = [];
const listaDeEncuestas = []

// aca creamos el ID de la encuesta por ej si preguntamos por equipo favorito esta  deberia llamarse "equipos"

function crearEncuesta() {
  
 
  const descripcion = prompt("Defina la pregunta");
  const opt1 = prompt("opcion 1");
  const opt2 = prompt("opcion 2");
 
  pregunta = { descripcion, opciones: [opt1, opt2] };
    encuesta.push(pregunta);




}
 

// se debe ingresar el ID de la encuesta creada anteriormente por ej "equipos" o "colores"

function responderEncuesta() {
    let i = 0
     
    while(i< encuesta.length){
        
        const resp = prompt(
      `${encuesta[i].descripcion} \n 1) ${encuesta[i].opciones[0]}  \n 2) ${encuesta[i].opciones[1]}`
    );
 
    if (resp === "1") {
      encuesta[i]. respuesta = encuesta[i].opciones[0];
    } else if (resp === "2") {
      encuesta[i]. respuesta = encuesta[i].opciones[1] ;
    } else alert("respuesta invalida");
    i++
  }


}
// por cada encuesta realizada deberemos llamar a la funcion guardar encuesta. para su correcto almacenamiento
     function guardarResultados(){

    let resultados = encuesta.map(function (posicion){
     return{
        pregunta:posicion.descripcion,
        respuesta:posicion.respuesta,
     }
    })
    listaDeEncuestas.push(resultados)
    console.log('La encuesta ha sido guardada'),
    alert('La encuesta ha sido guardada')
}
 
// utilizamos la funcion verRespuestas() en la consola para ver los resultados.

function verRespuestas() {
  console.table(listaDeEncuestas);

}


function verEncuestas(){
    console.table(listaDeEncuestas)
  }  
    

