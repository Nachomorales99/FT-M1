'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  let factores = [1];

  for (let i = 2; i <= num; i++) {
    while (num % i == 0) {
      factores.push(i);
      num/= i;
    }
  }

  return factores;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // Ordenamiento:
  // Iteramos comparando i vs i+1
  // Si debo ordenarlos, los cambio de posicion, y avanzo la i

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Hago el cambio
        let aux = array[j]; // 5
        array[j] = array[j + 1]; // 5 > 2
        array[j + 1] = aux;
      }
    }
  }
  return array; // Ordenado
};

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 1; i < array.length; i++) {
    // i Comienza en 1 porque la posicion 0 la asumo como ordenada
    let aux = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > aux) {
      // Ciclo while para encontrar la posicion
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = aux; // Inserto el elemento
  }
  return array; // Ordenado
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 0; i < array.length; i++) {
    let min = i; // Me guardo LA POSICION DONDE SE ENCUENTRA el minimo
    for (let j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) {
        min = j;
      }
    }

    // Cambiar las posiciones con el minimo
    let aux = array[i];
    array[i] = array[min];
    array[min] = aux;
  }
  return array;

} 

console.log(selectionSort([5,1,2,4,8]))

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
