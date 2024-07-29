//The sort function in JavaScript is used to sort the elements of an array. By default, it sorts the elements as strings in ascending order. However, you can provide a custom compare function to determine the sort order based on your specific needs.

//BASIC USAGE
const fruits = ['apple', 'banana', 'orange', 'grapes'];
console.log(fruits.sort());

//SORTING NUMBERS
//Sorting numbers requires a custom compare function because the default behavior converts the numbers to strings and then sorts them lexicographically (like dictionary order).

//Without a custom compare function
const numbers = [10, 5, 30, 20, 15];
console.log(numbers.sort()); // [10, 15, 20, 30, 5]

//With a custom compare function
const numbers2 = [10, 2, 30, 22];
console.log(numbers2.sort((a, b) => a - b)); // Ascending order
console.log(numbers2.sort((a, b) => b - a)); // Descending order