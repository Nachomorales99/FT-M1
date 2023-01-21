'use strict';

//Primera solucion   
function BinarioADecimal(num) {
   let result = 0;
   let potencia = 0;
   let array = [];

   array = num.split("").reverse();

   for (let i = 0; i < array.length; i++) {
      if (array[i] != 0) {
         potencia = Math.pow(2, i);
         result = result + potencia;
      }
   }
   return result;
}

//Segunda solucion
function BinarioADecimal(num) {
   let result = 0;
   let potencia = 0;

   for (let i = 0; i < num.length; i++) {
      potencia = num[i] * Math.pow(2, num.length - 1 - i);
      result += potencia;
   }
   return result;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Primer solucion
function DecimalABinario(num) {
   let binario = [];

   while (num !== 0) {
      let div = num / 2;
      binario.unshift(num % 2);
      num = Math.trunc(div);
   }

   if (binario.length == 0) {
      return "0"
   } else {
      return binario.join('');
   }
}

//Segunda solucion
function DecimalABinario(num) {
   let binario = [];

   while (num >= 1) {
      binario.unshift(num % 2);
      num = Math.trunc(num / 2);
   }

   if (num == 0) {
      return "0"
   } else {
      return binario.join("");
   }
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};