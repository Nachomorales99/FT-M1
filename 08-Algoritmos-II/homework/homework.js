'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length <= 1) return array;

  let pivote = array[0]; // El pivote siempre va a ser la 1ra posicion del array

  let left = [];
  let right = [];

  for (let i = 1; i < array.length; i++) {
    //Menor igual a la izquierda
    if (pivote >= array[i]) {
      left.push(array[i]);
    } else { 
      //Mayor a la derecha
      right.push(array[i])
    }
  }
  return [...quickSort(left), pivote, ...quickSort(right)]
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length < 2) return array; //Array de un solo elemento

  let count = Math.floor(array.length / 2);
  let left = array.slice(0, count);
  let right = array.slice(count);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {

  let resultado = [];

  let indexL = 0; 
  let indexR = 0

  while (indexL < left.length && indexR < right.length){

    if(left[indexL] < right[indexR]){

      resultado.push(left[indexL++]);

    } else {
      resultado.push(right[indexR++]);
    }
  } 

  return resultado.concat(left.slice(indexL)).concat(right.slice(indexR));
}  

/********************************
//CODE REVIEW VERSION
function mergeSort (array){

  if(array.length <= 1) return array;

  let div = split(array);
  let left = div[0];
  let right = div[1]; 

  return combine(mergeSort(left),mergeSort(right));
} 

function split (array){

  let malcom = Math.floor(array.length/2)
  let left = array.slice(0,malcom); 
  let right = array.slice(malcom);

  return [left, right];
} 

function combine(izq, der) {

  let i = 0;
  let x = 0;
  let newArray = [];

  while (i < izq.length &&  x < der.length) {
    if(izq[i] < der[x]){
      newArray.push(izq[i]);
      i++
    } else {
      newArray.push(der[x]);
      x++
    }
  }
  return newArray.concat(left.slice(i).concat(der.slice(x)));
}  

**************************/

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
