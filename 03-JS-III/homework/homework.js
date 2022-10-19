// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

const { suma } = require("../../02-JS-II/homework/homework");

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:

    // var total=[1,2,3,4,5,6,7,8,9,10].reduce(acumulador, num=> acumulador+num);
    //return total;


    // var array =[1,2,3,4,5,6,7,8,9,10];/// NO SE SI ANDA
    // var suma = array.reduce(function(accumulador, elemento){
    //     return suma + elemento;

    //  }, 0);

    var acc = 0; // COMO EN CLASE
    //var array =[1,2,3,4,5,6,7,8,9,10];
    for( let i = 1; i <=10; i++){

      acc = acc + i;
      
    }
    return acc;
 }

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:


  // var resultado =[];
  //var indice = 0;
  //while (indice< array.length){ //   EN CLASE
    //if((array[i] % 2) === 0){
      //resultado.push(array[i]);}
      // indice ++}
      // return resultado
  var arraypar = [];
  
  for(let i = 0; i<=array.length; i++){
    if((array[i] % 2) === 0){
      arraypar.push(array[i]);
    }
    
  }
  return arraypar;
  
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:

// var resultado= array.map(function(num){ // EN CLASE
  //return Math.pow(num,2);   /// 1° return dvuelve el numero al cuadrado, es de la funcion
//    })
//return resultado; // 2° RETURN DEVUELVE ARREGLO

var array2 =[];
for(let i=0; i < array.length; i++){
   
  array2.push(Math.pow(array[i],2));
}

return array2;
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:

  //var suma = 0;
  // for(let i=0; i < array.length; i++){
  //  suma = suma + array[i];
    
  // }
  // return suma;
 var suma = array.reduce(function(acc, elemento){ // COMO EN CLASE
   return acc + elemento;

 },0)
 return suma;
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:

// VAR numstring = num +""; /// EN CLASE // STRING VACIO SIN ESPACIO
//return numstring.length;

  var digitos= num.toString(); // LO CONVIERTE EN STRING
  return digitos.length;
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
