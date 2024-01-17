//Uso de promesas
//Las promesas son objetos que representan la terminacion o el fracaso eventual de una operacion

let promesaExitosa = new Promise(( resolve, rejet ) => {
    setTimeout(() => {
        resolve("Promesa exitosa")    
    }, 3000)
})

//Manejo de promesas
//then: se ejecuta cuando la promesa se resuelve exitosamente
//catch: se ejecuta cuando la promesa es rechazada
promesaExitosa.then((mensaje) => {
    console.log(mensaje);
}).catch((error) => {
    console.error(eeror);
});