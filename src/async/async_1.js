/*
    EL async awain nos permite trabajar las promesas sin utilizar el .then(), el codigo luce mas como
    si fuera sincrono, pero en realidad cuando aplicamos async se convierte la funcion asincrona
    await se le antepone a la funcion que resuelve una promesa.

*/

const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Do Something Async'),3000)
        : reject(new Error('Test Error'))
    });
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('before');
doSomething();
console.log('after');

/*
    La manera de manejar los errores ya que con .then/.catch podiamos manejarlo con el catch,
    necesitamos utilizar un try catch y queda lista la funcion con manejo de errores
*/

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log('Do something - 1');
    } catch (error) {
        console.log(error);
    }
}

console.log('Before - 1');
anotherFunction();
console.log('After - 1');

