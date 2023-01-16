'use strict';

function BinarioADecimal(num) {
   let result = 0;
   let potencia = 0;
   let array = [];

   array = num.split("").reverse();

   /*
   "1000" 
   ["1", "0", "0","0"] 
   ["0", "0", "0","1"]
   */

   for (let i = 0; i < array.length; i++) {
      if (array[i] != 0) {
         potencia = Math.pow(2, i);
         result = result + potencia;
      }
   }
   return result;
}

function DecimalABinario(num) {
   let div;
   let binario = [];
   let bin = "0";

   while (num !== 0) {

      div = num / 2;
      binario.push(num % 2);
      num = Math.trunc(div);
   }

   if (binario.length == 0) {
      return bin;
   } else {
      bin = binario.reverse().join('');
      return bin;
   }
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};