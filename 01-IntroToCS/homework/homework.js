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

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};