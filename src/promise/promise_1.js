/*

*/
const { rejects } = require("assert")
const { resolve } = require("path");

const somethingWillHappen = () =>{
    return new Promise((resolve, reject) => {
        if(true){
            resolve('hey');
        } else {
            reject('whoopsss');
        }
    });
};
////////
const somethingWillHappen2 = () => {
    return new Promise((resolve,reject) =>{
        if(true) {
            setTimeout(() => {
                resolve('True');
            },2000)
        } else {
            const error = new Error('whoooop');
            reject(error); 
        }
    });
}
somethingWillHappen()
.then(response => console.log(response))
.catch(error => console.log(error));

somethingWillHappen2()
.then(response => console.log(response))
.catch(err => console.log(err));

/*
    La funcion promise.all nos permite ejecutar todas las promesas que tengamos
    y nos deveulve lños resultados de cada una en un array
*/
Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response => {
    console.log('Array of results',response);
})
.catch(err => {
    console.log(err);
})