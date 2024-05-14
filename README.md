![baner](https://github.com/elGonzoSnow/Encuesta_Modulo2/assets/122803276/ec9b5769-a839-494d-aed9-42c1caa3c8db)

## Aplicacion de encuestas

Este es un programa simple para crear y responder encuestas. Permite al usuario definir una pregunta y 2 opciones, luego recopila respuestas a esas preguntas y las muestra en una tabla.

Funciones
1. crearEncuesta()
Esta función permite al usuario crear una nueva encuesta. Solicita al usuario ingresar una pregunta y dos opciones para responderla. Luego, almacena la pregunta y sus opciones en un objeto y lo agrega a la lista de encuestas.

2. responderEncuesta()
Permite a los usuarios responder a las encuestas previamente creadas. Itera sobre cada pregunta en la lista de encuestas y muestra la pregunta y sus opciones al usuario. Luego registra la respuesta del usuario y la almacena en el objeto de la pregunta correspondiente.

3. guardarResultados()
Esta función guarda los resultados de las encuestas respondidas. Convierte la lista de encuestas en un formato más legible y lo agrega a la lista de encuestas completadas.

4. verRespuestas()
Muestra en la consola una tabla con todas las encuestas respondidas hasta el momento. Cada fila representa una pregunta y su respectiva respuesta.

5. verEncuestas()
Muestra en la consola una tabla con todas las encuestas creadas hasta el momento, incluyendo las que aún no han sido respondidas.
````
// 
let pregunta = {};
const encuesta = [];
const listaDeEncuestas = []

// 

function crearEncuesta() {
  
 
  const descripcion = prompt("Defina la pregunta");
  const opt1 = prompt("opcion 1");
  const opt2 = prompt("opcion 2");
 
  pregunta = { descripcion, opciones: [opt1, opt2] };
    encuesta.push(pregunta);

}
 

// 


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
// 
     function guardarResultados(){

    let resultados = encuesta.map(function (posicion){
     return{
        pregunta:posicion.descripcion,
        respuesta:posicion.respuesta,
     }
    })
    listaDeEncuestas.push(resultados)
    console.log('La encuesta ha sido guardada'),
    alert('La encuesta ha sido guardada');
}
 
//

function verRespuestas() {
  console.table(listaDeEncuestas);

}

function verEncuestas(){
    console.table(listaDeEncuestas)
  }  

````
Uso
Ejecuta la función crearEncuesta() para crear una nueva encuesta.
Usa responderEncuesta() para responder a las encuestas creadas.
Puedes guardar los resultados de las encuestas con guardarResultados().
Utiliza verRespuestas() para ver las encuestas respondidas.
verEncuestas() te permite ver todas las encuestas, tanto respondidas como sin responder.
