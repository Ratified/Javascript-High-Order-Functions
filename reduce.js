//The reduce function is used to accumulate values from an array into a single value.
const prices = [5, 30, 10, 25, 15, 20];

// const total = prices.reduce(sum);

// console.log(total); // 105

// function sum(accumulator, element){
//     return accumulator + element;
// }

// const total = prices.reduce((accumulator, element) => accumulator + element);
// console.log(total); 
const totalPrice = prices.reduce((total, price) => {
    return total + price;
}, 0)
console.log(totalPrice); 

const people = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Jim", age: 20 },
    { name: "June", age: 30 },
    { name: "Jill", age: 25 }
];

const grouped = people.reduce((groupedPeople, person) => {
    const age = person.age;
    if (groupedPeople[age] == null) groupedPeople[age] = [];
    groupedPeople[age].push(person);
    return groupedPeople;
}, {});

console.log(grouped);