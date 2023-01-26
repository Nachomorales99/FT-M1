"use strict";

/*
Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
- size: retorna la cantidad total de nodos del árbol
- insert: agrega un nodo en el lugar correspondiente
- contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
- depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
- breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
  this._length = 1;
}

/*********************************************************************************************/

BinarySearchTree.prototype.size = function () {
  console.log(this._length);
  return this._length;
};

/*
// SIZE MANUAL 
BinarySearchTree.prototype.size = function () {
  let count = 1; 
  if(this.left){
    count += this.left.size();
  } 

  if(this.right){
    count += this.right.size();
  } 

  return count;
};
*/

/*********************************************************************************************/

BinarySearchTree.prototype.insert = function (tree) {
  //ME PREGUNTO SI ES MAYOR O MENOR

  if (tree < this.value) {
    //Si es menor a la IZQUIERDA
    if (this.left) {
      this.left.insert(tree);
    } else {
      this.left = new BinarySearchTree(tree);
      this._length++;
      return "Arbol insertado";
    }
  }

  if (tree > this.value) {
    //Si es Mayor a la DERECHA
    if (this.right) {
      this.right.insert(tree);
    } else {
      this.right = new BinarySearchTree(tree);
      this._length++;
      return "Arbol insertado";
    }
  }
};

/*********************************************************************************************/

BinarySearchTree.prototype.contains = function (finder) {
  // EL VALOR ESTA EN ESTE ARBOL
  if (this.value === finder) return true;

  // ¿TENGO ALGO A LA IZQUIERDA Y VALOR ESTA A LA IZQUIERDA?
  if (finder < this.value && this.left && this.left.contains(finder)) return true;

  // ¿TENGO ALGO A LA DERECHA Y VALOR ESTA A LA DERECHAA?
  if (finder > this.value && this.right && this.right.contains(finder)) return true;

  return false;
}; 

BinarySearchTree.prototype.contains = function (value) {
  let current = this;

  if (value === current.value) {
    return true;
  }

  if (value < current.value && current.left) {
    current = current.left;
    return current.contains(value);
  }

  if (value > current.value && current.right) {
    current = current.right;
    return current.contains(value);
  }
  return false;
};

/*********************************************************************************************/

BinarySearchTree.prototype.depthFirstForEach = function (cb, dfs) {
  switch (dfs) {
    case "pre-order":

      cb(this.value)
      if (this.left) this.left.depthFirstForEach(cb, dfs);
      if (this.right) this.right.depthFirstForEach(cb, dfs);
      break;

    case "post-order":

      if (this.left) this.left.depthFirstForEach(cb, dfs);
      if (this.right) this.right.depthFirstForEach(cb, dfs);
      cb(this.value)
      break;

    default:
      // IN-ORDER
      if (this.left) this.left.depthFirstForEach(cb, dfs);
      cb(this.value)
      if (this.right) this.right.depthFirstForEach(cb, dfs);
      break;
  }
};

/*********************************************************************************************/

BinarySearchTree.prototype.breadthFirstForEach = function (cb, queue = []) { //ENVIO UN QUEUE VACIA COMO DEFAULT

  // EJECUTO LA CB
  cb(this.value); 

  // GUARDO MIS HIJOS EN LA QUEUE - REVISANDO SI EXISTEN 
  if(this.left) queue.push(this.left);
  if(this.right) queue.push(this.right);

  if(queue.length > 0){
    queue.shift().breadthFirstForEach(cb, queue);
  }
};

/*********************************************************************************************/

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
