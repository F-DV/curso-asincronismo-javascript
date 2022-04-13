/*  
    Realizaremos un callback para realizar una peticion a la Api de 
    Rick and morty, El callback tiene como funcion principal en javascript
    permitir realizar peticiones sin bloquear nuestra aplicacion.
    Realizaremos la peticion con XMLHttpRequest, que es la manera antigua de 
    consultar a las Apis
    1) instalamos la dependencia de (npm install xmlhttprequest --save)
*/

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback){

    let xhttp = new XMLHttpRequest();       //Instanciamos un objeto para trabjarla
    xhttp.open('GET',url_api,true);
    xhttp.onreadystatechange = function(event){ //Creamos metodo para escuchar los eventos.
        if(xhttp.readyState === 4){             //Son 5 posibles respuesta, la 4 quiere decir que recibimos un cambia y esta listo
            if(xhttp.status === 200){            //200 para evaluar que sea OK la respuesta
               callback(null, JSON.parse(xhttp.responseText)) //dado que recibimos un string, lo parceamos a objeto
            }else{
                const error = new Error('Error' + url_api);  //La forma correcta de crear un Error es instanciar el objeto Error
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

/*
    Realizamos 3 peticiones anidadas, es mala practica por esta razon ya se hacer con otras
    herramientas como fetch , promoses, async await.
*/
fetchData(API, function(error1,data1) {
    if(error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function(error2,data2){
        if(error2) return console.error(error2);
        fetchData(data2.origin.url, function(error3,data3) {
            if(error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    })
})
