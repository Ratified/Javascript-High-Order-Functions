// // Objects
// // key-value pairs

// const myObj = { name: "Dave" };

// const anotherObj = {
//     alive: true,
//     answer: 42,
//     hobbies: ['coding', 'reading', 'running'],
//     beverage: {
//         morning: 'coffee',
//         afternoon: 'tea',
//         evening: 'water'
//     }
// }

// console.log(myObj.name); // Dave
// console.log(anotherObj.beverage[1]); // coding

const user = {
    name: "Bob",
    age: 32
};

// Store object in localStorage
// localStorage.setItem('user', JSON.stringify(user));
localStorage.setItem('user', JSON.stringify(user));

// Retrieve and parse the object from localStorage
const storedUser = JSON.parse(localStorage.getItem('user'));
console.log(storedUser);
