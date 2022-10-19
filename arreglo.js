// SUMA EN UN ARREGLO

// var array = ["hola","chau"];
// var resultado = array.reduce(function(acumulador, elemento){
//     return acumulador + " "+ elemento;
// }, "frase: ");
// console.log(resultado); //return resultado

// AGREGAR EN UN ARREGLO NUMEROS PARES

// var arraypar = [];
  
//   for(let i = 0; i<=array.length; i++){
//     if((array[i] % 2) === 0){
//       arraypar.push(array[i]);
//     }
    
//   }
//   return arraypar;


// var arraypar = 1234;
// cont = 0;
// for(let i=0; i <= arraypar.length; i++){
//    cont ++
    
//   }
// console.log(cont);


//EN CLASE  
// var messi = {
//   nombre: "Lionel",
//   apellido: "Messi",
//   saluda: function(){
//     console.log("hola Soy Messi");
//   },

// };
// messi.saluda();


// 1---FUNCION CONSTRUCTORA DE OBJETO
// var Persona = function(){
//   this.nombre="Lionel";
//   this.apellido ="Messi";
//   this.saluda = function(){
//     console.log("hola Soy Messi");
//   };
// };

// var messi = new Persona(); // instaciamos persona a la variable messi
// console.log(messi);

// Persona {  // en consola
//   nombre: 'Lionel',
//   apellido: 'Messi',
//   saluda: [Function (anonymous)]
// }

// 2--FUNCION CONSTRUCTORA DE OBJETO

// var Persona = function(nombre, apellido){    // ESTO ES UNA CLASE//  OBEJTO
//   this.nombre = nombre;
//   this.apellido = apellido;
//   this.saluda = function(){
//     console.log("hola Soy"+ this.apellido);
//   };
// };
// var bart = new Persona( "bart", "simpson"); // instaNciamos persona a la variable messi
// var messi = new Persona( "Lionel", "Messi"); // instaNciamos persona a la variable messi
// console.log(bart);  // var bart
// console.log(messi);

// EN CONSOLA:
// Persona {
//   nombre: 'bart',
//   apellido: 'simpson',
//   saluda: [Function (anonymous)]
// }
// Persona {
//   nombre: 'Lionel',
//   apellido: 'Messi',
//   saluda: [Function (anonymous)]
// }


/// PROTOTIPO

//var Persona = function(nombre, apellido){       // FUNCION CONSTRUCTORA- PLANITILLA DE OBJETOS
 //    this.nombre = nombre;
 //    this.apellido = apellido;
     
 // };
 // Persona.prototype.saluda = function(){ // sacamos la funcion PERO LA DIRECCIONAMOS
 //      console.log("hola Soy"+ this.apellido);// CON PROTOTYPE
 //   };

 //  var bart = new Persona( "bart", "simpson"); // instaNciamos persona a la variable messi
 //  var messi = new Persona( "Lionel", "Messi"); // instaNciamos persona a la variable messi
 //   console.log(bart);  // var bart
 //    console.log(messi);
 //    messi.saluda();
  
  //EN CONSOLA  
  //Persona { nombre: 'bart', apellido: 'simpson' }
 // Persona { nombre: 'Lionel', apellido: 'Messi' }
  // hola SoyMessi
  
