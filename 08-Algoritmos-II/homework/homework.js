'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length <= 1) return array;

  let pivote = array[0];

  let left = [];
  let right = [];

  for (let i = 1; i < array.length; i++) {
    if (pivote > array[i]) {
      left.push(array[i]);
    } else {
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

  if (array.length < 2) return array;

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

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
