/**
 * Responsabilidad: gestionar el los flujos de que recibe y muestra la interfáz
 * */ 

let obj = [];

function receivedNumber() {
    try {
        const n = document.getElementById('value').value.trim();
        if (n.length === 0) {
            throw "La casilla no debe estar vacia";
        }
        if (isNaN(n)) {
            throw "El valor ingresado debe ser numerico";
        }
        const value = parseInt(n);
        if (value % 3 === 0 && value % 5 === 0) {
            document.getElementById("result").innerHTML = "El número ingresado es divisible de 3 y 5";
            document.getElementById("fizz-buzz").innerHTML = "FizzBuzz";
        } else if (value % 3 === 0) {
            document.getElementById("result").innerHTML = "El número ingresado es divisible de 3";
            document.getElementById("fizz-buzz").innerHTML = "Fizz";
        } else if (value % 5 === 0) {
            document.getElementById("result").innerHTML = "El número ingresado es divisible de 5";
            document.getElementById("fizz-buzz").innerHTML = "Buzz";
        } else {
            document.getElementById("result").innerHTML = "El número ingresado no es divisible de 3 ni 5";
            document.getElementById("fizz-buzz").innerHTML = value;
        }
        obj.push(value);
        console.log(obj);
    } catch (error) {
        document.getElementById("result").innerHTML = "Resultado: " + error;
        document.getElementById("fizz-buzz").innerHTML = "";
    }
}

document.getElementById('btn').addEventListener('click', receivedNumber);