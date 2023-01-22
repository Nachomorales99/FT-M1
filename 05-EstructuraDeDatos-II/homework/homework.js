'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this._length = 0; // Ir conociendo la cantidad de Nodos que posee la lista
  this.head = null; // Primer apuntador de la lista, al comienzo es Null porque esta vacio 
}

function Node(value) { // Value es el elemento a agregar en la lista
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function (value) {
  let node = new Node(value); // Creacion del nuevo nodo ---> Node = {value: value, next: null}
  let varRef = this.head; // Variable que es igual al nodo anterior y busca si posse un .next distinto de null poder agregar el nuevo nodo

  if (!varRef) { //Ver si existe la variable que referencia al Nodo, si no existe la crea
    this.head = node; // Agrega el primer Nodo creado
    this._length++; // Suma 1 al contador de la Lista para saber la cantidad de Nodos
    return node; // Retorna el primer Nodo
  }

  while (varRef.next) { // Mientras la varible tenga algo distino de null, osea que tenga un nodo
    varRef = varRef.next; // Va recorriendo la lista, tomando el valor del nodo que sigue, hasta que sea NULL
  }
  varRef.next = node; // Se agrega el nuevo nodo a la ultima posicion
  this._length++; // Suma 1 al contador, ya que agrego un nuevo Nodo
  return node; // Retorna el Nodo nuevo
}; 

LinkedList.prototype.remove = function () { 
  let varRef = this.head;
  let retornar = null;

  if(!varRef) { // Lista vacia
    return null; // Retorna Null
  } else if (this._length === 1) { // Lista con 1 Nodo
    retornar = this.head;  // La variable retornada seria igual a este unico Nodo
    this.head = null; // Borramos este unico Nodo
    this._length--; // Quitamos 1 al contador
    return retornar.value; // Retornamos este Nodo que borramos
  }  

  while (varRef.next.next) { // Buscamos el ultimo Nodo recorriendo Nodo x Nodo hasta llegar a Null
    varRef = varRef.next; // Asignamos el Nodo siguiente si .next no es Null
  } 

    retornar = varRef.next; // Asignamos el ultimo Nodo a la variable 
    varRef.next = null; // Borramos la ulrima variable
    this._length--; // Quitamos 1 al contador de la lista
    return retornar.value; // Devolvemos el valor de lo que borramos value: "Valor"
}; 

LinkedList.prototype.search = function (wow) { 

  if(!varRef) return null; // Lista vacia - Retorna Null

  

  /* 
  search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null 
  */
}


/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {} 

HashTable.prototype.hash = function () {}
HashTable.prototype.set = function (obj) {}
HashTable.prototype.get = function (key) {}
HashTable.prototype.hashKey = function (key) {}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};