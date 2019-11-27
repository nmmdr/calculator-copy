'use strict';

/*
   Your task:
   1. Choose a strategy below (if/else or switch statement)
   2. Uncomment the starter lines
   3. Add other statements for the following operations: subtract, multiply, divide
   4. Add another operation that when selected javascript to change the page entirely
*/

const calcForm = document.getElementById('calculator__form');
const operation = document.getElementById('operation__select');
const result = document.getElementById('operation__result');

let calculatorResult;
var words = ['smile','positivity','lucky','loved','cheer'];
operation.addEventListener('change', function(e) {
   if (operation.value === 'randomwords') {
      calculatorResult =  words[Math.floor(Math.random()*5)];
      result.value = calculatorResult;
   }
});
calcForm.addEventListener('submit', function (e) {
   // Prevent page refresh
   e.preventDefault();
   // placeholder for result
   let firstNumber = parseInt(e.target[0].value);
   let secondNumber = parseInt(e.target[2].value);
   // already defined operation and result container outside of the form

  

   // // one strategy is to use a combination of if/else statements (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
   // if (operation.value === 'add') {
   //    calculatorResult = firstNumber + secondNumber;
   // } else {
   //    calculatorResult = 0;
   // }

   // // another strategy is to use a switch statement (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
   // switch (operation.value) {
   //    case 'add':
   //       calculatorResult = firstNumber + secondNumber;
   //       break;
   //    default:
   //       calculatorResult = 0;
   // }

    // another strategy is to use a switch statement (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
   
    switch (operation.value) {
       case 'add':
          calculatorResult = firstNumber + secondNumber;
          break;
    }

    switch (operation.value) {
      case 'subtract':
         calculatorResult = firstNumber - secondNumber;
         break;
   }
   switch (operation.value) {
      case 'multiply':
         calculatorResult = firstNumber * secondNumber;
         break;
   }
   switch (operation.value) {
      case 'divide':
         calculatorResult = firstNumber / secondNumber;
         break;
   }
   switch (operation.value) {
      case 'randomwords':
         calculatorResult =  words[Math.floor(Math.random()*5)];
         
   

      


         
         break;
   }
      //  default: {
      //calculatorResult = 0;
   //  } 
   result.value = calculatorResult;
});