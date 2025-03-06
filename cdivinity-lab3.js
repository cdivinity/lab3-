//Courtland Divinity
//ITMD 441




//Excercise 1:
function minMaxAverage(numbers) {
    let total = numbers.length;
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    let sum = numbers.reduce((a, b) => a + b, 0);
    let average = sum / total;
    console.log(`Total Numbers: ${total}, Min Value: ${min}, Max Value: ${max}, Average: ${average}`);
  }
  minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);
  minMaxAverage([ 1, 5, 3, 5, 10, 12, 8, 6]);
  minMaxAverage([ 9, 45, 89, 7, 100, 15, 89, 0]);






//Excercise 2:
function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
      count++;
    }
  }
  return count;
}
console.log("goku: " + countVowels("goku") + " vowels.");
console.log("world: " + countVowels("world") + " vowels.");
console.log("mission: " + countVowels("mission") + " vowels.");


//Excerise 3:
function sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  console.log("Original Array: [9, 4, 6, 2] output Sorted Array: ", sortNumbers([9, 4, 6, 2]));
  console.log("Original Array: [1, 5, 3, 7, 2] output Sorted Array: ", sortNumbers([1, 5, 3, 7, 2]));
  console.log("Original Array: [8, 2, 1, 9, 5] output Sorted Array: ", sortNumbers([8, 2, 1, 9, 5]));


//Excerise 4:
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }

  console.log("Celsius: 30 = Fahrenheit: " + celsiusToFahrenheit(30).toFixed(1));
  console.log("Celsius: 24 = Fahrenheit: " + celsiusToFahrenheit(24).toFixed(1));
  console.log("Celsius: 18 = Fahrenheit: " + celsiusToFahrenheit(18).toFixed(1));