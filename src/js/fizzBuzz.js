/**
 * Responsabilidad: gestionar la lógica de FizzBuzz
 * Recuerda que la estructura de las respuestas debe ser estructurada:
 *  {
        status: "", // Código indicando éxito o error
        message: "", // Mensaje
        data: {
            number: 0, // Número evaluado
            result: "" // Resultado esperado
            }
    }
 * */ 

function getNumber(){
    if(value % 3 === 0){
        document.getElementById("result").innerHTML = "El número ingresado es divisible de 3"
    }
    return value;
}

if (typeof module !== 'undefined') {
  module.exports = {
    getNumber,
  };
}