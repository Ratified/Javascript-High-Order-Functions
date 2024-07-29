// The filter function is used to select elements from an array that meet certain criteria.
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num%2==0);
console.log(evenNumbers); // [2, 4]