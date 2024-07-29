//The reduce function is used to accumulate values from an array into a single value.
const prices = [5, 30, 10, 25, 15, 20];

// const total = prices.reduce(sum);

// console.log(total); // 105

// function sum(accumulator, element){
//     return accumulator + element;
// }

const total = prices.reduce((accumulator, element) => accumulator + element);
console.log(total); // 105