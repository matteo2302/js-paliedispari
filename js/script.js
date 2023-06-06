console.log("jsok");
//fase 0
const word = prompt("quale parola vuoi controllare?", "").trim();
console.log(word);
//fase 1
let result = "questa parola non è palindroma";
let reResult = "";
const reverse = word;
for (i = reverse.length - 1; i >= 0; i--) {
  reResult += reverse.charAt(i);
}
console.log(reResult);
isPalindorma();
function isPalindorma() {
  if (word === reResult) {
    result = " questa parola è palindroma";
  }
  console.log(result);
}
