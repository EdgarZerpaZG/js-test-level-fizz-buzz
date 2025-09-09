/**
 * Responsabilidad: gestionar el los flujos de que recibe y muestra la interfáz
 * */ 
let obj = [];
function receivedNumber(value) {
    if(value % 3 === 0){
        document.getElementById("result").innerHTML = "El número ingresado es multiplo de 3"
    }
    if(value % 5 === 0){
        document.getElementById("result").innerHTML = "El número ingresado es multiplo de 5"
    }
    if(value % 3 === 0 && value % 5 === 0){
        document.getElementById("result").innerHTML = "El número ingresado es multiplo de 3 y 5"
    }
    obj.push(value);
    console.log(obj)
}