/**
 * Responsabilidad: gestionar el los flujos de que recibe y muestra la interfáz
 * */ 
let obj = [];
function receivedNumber(n) {
    if (typeof n !== 'number') {
        throw 'El argumento debe ser un número';
    }
    return n;
}
try{
    const value = receivedNumber(15);
    if(value % 3 === 0){
        document.getElementById("result").innerHTML = "El número ingresado es divisible de 3"
        document.getElementById("fizz-buzz").innerHTML = "Fizz"
    }
    if(value % 5 === 0){
        document.getElementById("result").innerHTML = "El número ingresado es divisible de 5"
        document.getElementById("fizz-buzz").innerHTML = "Buzz"
    }
    if(value % 3 === 0 && value % 5 === 0){
        document.getElementById("result").innerHTML = "El número ingresado es divisible de 3 y 5"
        document.getElementById("fizz-buzz").innerHTML = "FizzBuzz"
    }
    obj.push(value);
    console.log(obj);

    } catch (error){
    document.getElementById("result").innerHTML = "Resultado: " + error;
}