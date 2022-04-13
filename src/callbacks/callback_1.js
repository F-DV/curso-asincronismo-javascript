/*
    El callback es la funcion que es llamada poor otra funcion, de gran utilidad para los llamados a las Apis,
    y que nuestra aplicacion no se quede esperando la respuesta de la api por una funcion que esta esperando en 
    el call stack
*/
//Ejemplo 1
function sum(num1,num2){  //Funcion callback
    return num1 +num2;
}

function calc(num1,num2,callback){
    return console.log(callback(num1,num2));
}

calc(2,4,sum);

//Ejemplo 2

function date(callback){
    console.log(new Date);
    setTimeout(function () {
        let date = new Date;
        callback(date);
    }, 3000);
}

function printDate(dateNow){  //funcion callback
    console.log(dateNow);
}

date(printDate);