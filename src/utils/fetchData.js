const { resolve } = require('path');

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api)=>{
    
    return new Promise((resolve, reject) => {
        
            const xhttp = new XMLHttpRequest();         //Instanciamos un objeto para trabjarla
            xhttp.open('GET',url_api,true);
            xhttp.onreadystatechange = (() =>{          //Creamos metodo para escuchar los eventos.
                
                if(xhttp.readyState === 4){             //Son 5 posibles respuesta, la 4 quiere decir que recibimos un cambia y esta listo
                    (xhttp.status === 200)              //200 para evaluar que sea OK la respuesta
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error',url_api));
                }
            })
            xhttp.send();

    });
}

module.exports = fetchData;