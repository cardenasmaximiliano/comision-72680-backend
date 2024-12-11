//Js nos ofrece tipos datos primitivos y complejos

//datos primitivos
/*

number => 1234
string => cadenas de texto
boolean => true o false
undefined => representa una variable declarada pero que aun no tiene valor asignado.
Null => representa un valor intencionalmente vacio o inexistente. 

*/ 
/* datos complejos

objetos, estructuras que estan compuestas por clave-valor.
arrays => colecciones de tipos datos. 

*/
//variable => un tipo de dato almacenado en un espacio de memoria. 

// let  => tiene alcance de bloque y se puede modificar.

// const => no se pueden modificar. 

let numero = 1;
let cadenaDeTexto = 'esto es una cadena de texto';
let boolean = true;

/*
Realizá un programa que permita ingresar valores del mismo tipo para las variables num1 y num2. 
Una vez cargadas, mostrar ambas variables por pantalla, intercambiá sus valores
(que lo cargado en num1 quede en num2, y viceversa) y volvé a mostrarlas actualizadas. 
*/


let num1 = 1;
let num2 = 2;

console.log(num1, num2);

let aux = num1;

num1 = num2;
num2 = aux;

console.log(num1)
console.log(num2)

//bucles
//nos van a permitir a nosotros ejecutar rapidamente bloques de codigo mientras se cumpla una condicion
/*
for => cuando nosotros ya sabemos la cantidad de veces que queremos que se repita el codigo

condicion

while => se repite mientras la condicion sea verdadera
do..while => ejecuta al menos una vez antes de verificar la condicion

for...of => recorre elementos de un array
for... in  => recorre elementos de un objeto


*/

// for(inicializacion;condicion;incrementador){
//     //todo lo que esta se va a ejecutar e iterar
// }

for(let i = 1; i <=5; i++){
    console.log(i)
}

let i = 1;
let suma = 0;


while(i <= 5){
    suma += i;
    i++
}

console.log(suma)

let j = 10;

do{
    console.log(j)
    j++
}while( j < 5)

// for..of

let frutas = ["manzana","pera","papaya"] //alt+91

for(let fruta of frutas){
    console.log(fruta)
}

//for...in

let profesor ={
    nombre: "maximiliano",
    edad: 32
}

for(let clave in profesor){
    console.log(`${clave}: ${profesor[clave]}`)
}

/*
Dado un array de números: [3, 7, 2, 9, 5], 
crea un programa que encuentre el número más grande utilizando un bucle.
 Guarda el número más grande en una variable llamada mayor y muéstralo en la consola.

*/

let numeros = [3, 7, 2, 9, 5];

let mayor = numeros[0];

for(let i = 1; i <numeros.length; i++){
    if(numeros[i] > mayor){
        mayor = numeros [i]
    }
}

console.log("el numero mas grande es: " + mayor);


/*
let items = [3, 7, 2, 9, 5]
let bigger = items[0];

for(let item of items) {
    bigger = item > bigger ? item : bigger
}

console.log(`El mayor elemento es ${bigger}`)


*/

/*

Crea un programa que genere la tabla de multiplicar del 5 (del 5x1 al 5x10) y
la almacene en un array llamado tabla.
Luego, muestra los resultados en la consola uno por uno.

*/

let tabla = []

for(let i = 1; i <=10; i++){
    //se utiliza para añadir elements al final de un array
    tabla.push(5 * i)
}

for(let resultado of tabla){
    console.log(resultado)
}

//funciones ? => es un bloque de codigo que realiza una tarea especifica o calcule un valor.
//tiene la particularidad de que se puede reutilizar, en diferentes partes del programa.

function saludar(){
    console.log("hola chicos");

}

saludar();

//las funciones anonimas suelen alojarse dentro de las variables

let multiplicar = function(a,b){

    return a *b;

}

console.log(multiplicar(2,4))

//funciones flecha

const dividir = (a,b) => a /b;

console.log(dividir(10,2))

// Scope => ambito. El alcance de una variable. 
//determina donde las variables, funciones u objetos son accesibles en el codigo. 

//global => son las variables declaradas fuera de cualquier funcion o bloque tienen ambito global
//estan disponibles en cualquier parte del codigo.


//local =< las variables declaradas dentro de una funcion tienen un ambito local.
//solamente las variables van a vivir dentro de la funcion. 

let mensaje = "esto es una variable global"; //esta variable pago general

function mostrarMensaje(){
    console.log(mensaje)
}

mostrarMensaje()

function ejemplo(){
    let local = "esto es una variable local" //esta variable es v.i.p
    console.log(local)
}

ejemplo()

console.log(local)