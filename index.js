//var, let, const //Palabras reservadas de javascript: formas de crear y declarar variables en jS
//Variables son cajitas que contienen datos. Todas las operaciones se hacen mediante variables. Todas las variables llevan su nombre.
// = es un operador de asignación. Adigna un valor a esa variable. Se puede declarar una variable sin darle un valor (y darselo cuando se use), y cuando se le agrega el valor se está inicializando.
// Los nombres de las variables, no pueden empezar con mayúsculas, tener simbolos o números.
let number = 1 // número entero o decimal
const boolean = true // solo verdadero o falso, sin comillas.
const array = []// sirven para guardar listas de distintos datos. Ej. 
const frutas = ["manzana", "pera", "piña", "sandía"]
const object = {} // pueden haber todo tipo de valores, incluso otros objetos y array
const alimentos = {
    frutas,
    lapiz: "negro"
}
console.log(alimentos.frutas[1])
console.log (typeof frutas) // para saber de que tipo es la variable

//STRINGS
const name = "Scarlette" //string porque lleva comillas
const lastname = "Norambuena"
const fullname = name + " " + lastname // ? Scarlette Norambuena

console.log (fullname)// expresión: cualquier punto en donde se devuelve un valor.
//? Scarlette Norambuena


fullname.length
fullname.charAt(5)
fullname.replace("Scarlette", "Lonchi")
fullname = fullname.replace("Scarlette", "Lonchi")// es para cambiar la variable al reemplazo, sin embargo al ser const, no se puede cambiar, la variable tendría que ser let.
fullname.indexOf("e",0) //? 5  // devuelve la posición de la primera vez que aparece el carácter indicado. Si no encuentra el carácter, devuelve -1 al igual que search. lastIndexOf (comienza desde el final)
fullname.substring(0,7)//? "Scarlet" // Devuelve el substring que empieza en el carácter de inicio y termina en el carácter de fin. 

//CONDICIONALES O BOLEANOS
if (true) {
    console.log ("la condición SI se cumplió")
    } else {
    console.log ("la condición NO se cumplió")
  }

