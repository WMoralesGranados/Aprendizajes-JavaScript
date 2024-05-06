// let persona = {
//     nombre: "Juan",
//     edad: 30,
//     esEstudiante: true,
//     saludar: function() {
//         console.log("¡Hola! Mi nombre es " + this.nombre + ".");
//     }
// };

// persona.edad = 31;
// persona.ciudad = 'Madrid'

// delete persona.esEstudiante;

// for (var propiedad in persona) {
//     console.log(propiedad + ': ' + persona[propiedad])
// }

// // console.log(persona.edad)
// // persona.saludar()
// function mostrarInformacion(objeto) {
//     console.log("Nombre: " + objeto.nombre);
//     console.log("Edad: " + objeto.edad);
// }

// mostrarInformacion(persona);

// function Persona(nombre, edad) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.saludar = function() {
//         console.log("¡Hola! Mi nombre es " + this.nombre + ".");
//     };
// }

// let juan = new Persona("Juan", 30);
// let maria = new Persona("Maria", 25);
// var Jorge = new Persona('Jorge', 32);

// // juan.saludar(); // "¡Hola! Mi nombre es Juan."
// // maria.saludar();
// Jorge.saludar() // "¡Hola! Mi nombre es Maria."

// function perro (nombre, edad, raza) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.raza = raza;
//     this.ladrar = function() {
//         console.log('guau guau Soy ' + this.nombre + ' y soy un ' + this.raza);
//     }
// }

// var bruna = new perro('Bruna', 1, 'Cocker Spaniel')
// bruna.ladrar();

// EJERCICIO ---------------------------------------------------------------------------------
// Crea un objeto llamado libro que represente un libro con las siguientes propiedades:

// titulo: El título del libro (cadena de texto).
// autor: El autor del libro (cadena de texto).
// paginas: El número de páginas del libro (número entero).
// leido: Un booleano que indica si has leído el libro o no.

// Luego, crea un método info para el objeto libro que imprima la información del libro en la consola de la siguiente manera:

// "Título: [titulo]"
// "Autor: [autor]"
// "Páginas: [paginas]"
// "Leído: Sí/No" (dependiendo del valor de la propiedad leido)

// var libro = {
//     titulo: 'Habitos Atómicos',
//     autor: 'James Clear',
//     paginas: 300,
//     leido: true,
//     info: function() {
//         console.log('Títlulo: ' + libro['titulo'])
//         console.log('Autor: ' + libro['autor'])
//         console.log('Paginas: ' + libro['paginas'])
//         console.log('Leido: ' + (this.leido ? 'Si':'No'));

//     }
// }

// libro.info()

// function rectangulo (base, altura) {
//     this.base = base;
//     this.altura = altura;
//     this.area = function(){
//         return base * altura / 2;
//     }
//     this.perimetron = function(){
//         return 2 * this.base + 2 * this.altura;
//     }
// }

// var rectangulo1 = new rectangulo(10, 20)
// console.log(rectangulo1.perimetron())

function Cortador (nombre) {
    this.nombre = nombre;
}

Cortador.prototype.trabajar = function() {
    console.log(this.nombre + ' esta cortando');
}

function Supervisor (nombre, turno, cortador) {
    Cortador.call(this, nombre);
    this.turno = turno;
    this.cortador = cortador;
}

Supervisor.prototype = Object.create(Cortador.prototype);
Supervisor.prototype.constructor = Supervisor;

Supervisor.prototype.feedback = function() {
    console.log(this.nombre + ' dio retroalimentacion a ' + this.cortador.nombre);
}

var Jorge = new Cortador('Jorge');
var Roberto = new Supervisor ('Roberto', 'Matituno', Jorge);

Roberto.trabajar();
Roberto.feedback();