let numbers = [1, 50, 40, 3, 19];
let sum = numbers.filter(n => n > 20).reduce((previousValue, currentValue) => previousValue + currentValue);
console.log(sum);