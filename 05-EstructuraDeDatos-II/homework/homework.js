"use strict";

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

/* 
//EXPLICACION PASO A PASO

Como base crearemos dos clases. Una clase **Node**, con los atributos **data** y **next**, y otra clase **List**, con los atributos **length** y **head**.

En las listas podremos iterar, y agregar y eliminar elementos al comienzo, al medio y al final. 

Luego de crear las clases **Node** y **List**, haremos un método para la clase ***List*** a partir de su *prototype*. En este caso, como buscamos agregar elementos al final de la lista, el método se llamará **add**.

Al comienzo establecemos dos variables; **node**, que creará un nuevo nodo con datos, y **current**, que será una referencia al primer nodo de la lista.

Luego hacemos un condicional que, en caso de que no exista ningún nodo en nuestra lista, se encargará de crear el primero.

Después del condicional hay un ciclio *while*. En su argumento encontramos la variable **current**, que apunta al primer nodo. Utilizamos su propiedad **.next** para saber si existe un nodo luego del primero. De esta forma podremos recorrer toda la lista. Cuando el ciclo *while* termine, será porque estamos parados en un nodo que no tiene otro posterior.

Es aquí cuando se crea un nodo posterior al que estamos parados.
*/

function LinkedList() {
  this._length = 0; // Ir conociendo la cantidad de Nodos que posee la lista
  this.head = null; // Primer apuntador de la lista, al comienzo es Null porque esta vacio
}

function Node(value) {
  // Value es el elemento a agregar en la lista
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function (value) {
  let node = new Node(value); // Creacion del nuevo nodo ---> Node = {value: value, next: null}
  let varRef = this.head; // Variable que es igual al nodo anterior y busca si posse un .next distinto de null poder agregar el nuevo nodo

  if (!varRef) {
    //Ver si existe la variable que referencia al Nodo, si no existe la crea
    this.head = node; // Agrega el primer Nodo creado
    this._length++; // Suma 1 al contador de la Lista para saber la cantidad de Nodos
    return node; // Retorna el primer Nodo
  }

  while (varRef.next) {
    // Mientras la varible tenga algo distino de null, osea que tenga un nodo
    varRef = varRef.next; // Va recorriendo la lista, tomando el valor del nodo que sigue, hasta que sea NULL
  }
  varRef.next = node; // Se agrega el nuevo nodo a la ultima posicion
  this._length++; // Suma 1 al contador, ya que agrego un nuevo Nodo
  return node; // Retorna el Nodo nuevo
};

LinkedList.prototype.remove = function () {
  let varRef = this.head; // Declaramos una variable que haga referencia al Head de la lista
  let retornar = null;

  if (!varRef) {
    // Lista vacia
    return null; // Retorna Null
  } else if (this._length === 1) {
    // Lista con 1 Nodo
    retornar = this.head; // La variable retornada seria igual a este unico Nodo
    this.head = null; // Borramos este unico Nodo
    this._length--; // Quitamos 1 al contador
    return retornar.value; // Retornamos este Nodo que borramos
  }

  while (varRef.next.next) {
    // Buscamos el ultimo Nodo recorriendo Nodo x Nodo hasta llegar a Null
    varRef = varRef.next; // Asignamos el Nodo siguiente si .next no es Null
  }

  retornar = varRef.next; // Asignamos el ultimo Nodo a la variable
  varRef.next = null; // Borramos la ulrima variable
  this._length--; // Quitamos 1 al contador de la lista
  return retornar.value; // Devolvemos el valor de lo que borramos value: "Valor"
};

LinkedList.prototype.search = function (wow) {
  let varRef = this.head;

  while (varRef) {
    if (typeof wow === "function") {
      if (wow(varRef.value)) {
        return varRef.value;
      }
    } else {
      if (varRef.value === wow) {
        return varRef.value;
      }
    }
    varRef = varRef.next;
  }
  return null;
};

//MÉTODO PARA IMPRIMIR LA DATA DE CADA NODO
/*
List.prototype.getAll = function(){
	var varRef = this.head;
	if(!varRef){
		console.log('La lista esta vacia!');
		return;
	}

	while(varRef){
		console.log(varRef.data);
		varRef = varRef.next;
	}

	return;
}; 
*/

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
function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];
}

HashTable.prototype.hash = function (input) {
  let acc = 0;

  for (let char of input) {
    let num = char.charCodeAt();
    acc += num;
  }

  return acc % this.numBuckets;
}; 

HashTable.prototype.set = function (key, value) {
  if (typeof key !== "string") throw TypeError("Keys must be strings");

  let numberKey = this.hash(key);

  if (!this.buckets[numberKey]) { //COLSIONES
    this.buckets[numberKey] = {}; // CREO OTRO OBJ PARA ESA POSICION
  }
  this.buckets[numberKey][key] = value;
};

HashTable.prototype.get = function (key) {
  let numberKey = this.hash(key);
  return this.buckets[numberKey][key];
};

HashTable.prototype.hasKey = function (key) {
  let numberKey = this.hash(key);
  return this.buckets[numberKey].hasOwnProperty(key);
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
