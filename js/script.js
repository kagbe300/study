const numbers = [2, 5, 6, 8, 10, 11];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0){
  	sum += numbers[i];
  }
}
jQuery( document ).ready(function() {
    document.getElementById("zadacha_1").value = sum;
});
