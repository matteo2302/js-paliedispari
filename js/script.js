console.log("jsok");
/******************polindrama****************/
//fase 0
// const word = prompt("quale parola vuoi controllare?", "").trim();
// console.log(word);
// //fase 1
// let result = "questa parola non è palindroma";
// let reResult = "";
// const reverse = word;
// for (i = reverse.length - 1; i >= 0; i--) {
//   reResult += reverse.charAt(i);
// }
// console.log(reResult);
// isPalindorma();
// function isPalindorma() {
//   if (word === reResult) {
//     result = " questa parola è palindroma";
//   }
//   console.log(result);
// }
/*********************pari o dispari***********************/
let playerChoice = prompt("scegli se scommetere su pari o dispari", "pari");
let playerNumber = parseInt(
  prompt("scegli un numero non inferiore a uno e non superiore a 5", 2)
);
let cpuNumber = Math.floor(Math.random() * 5 + 1);
let winner = "ha vinto la cpu";
let numresult = somma(cpuNumber, playerNumber);
let evenOdd = even(numresult);
console.log(playerChoice);
console.log(playerNumber);
console.log(cpuNumber);
function somma(a, b) {
  return cpuNumber + playerNumber;
}
somma();
console.log(numresult);
function even(a) {
  if (numresult % 2 === 0) {
    evenOdd = "pari";
  } else {
    evenOdd = "odd";
  }
}
evenOdd();
console.log(evenOdd);
