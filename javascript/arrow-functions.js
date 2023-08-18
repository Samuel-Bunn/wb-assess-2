import { getEllensInfo } from "./arrays-objects"

// Write an arrow function that returns 2.
const giveMeTwo = () => {
  return 2
}
// console.log(giveMeTwo())



// Write an arrow function that takes in a movie and returns '<movie> is the best movie
// ever!' where <movie> is the argument passed into the function.
const bestMovie = (movie) => {
  return  movie + ' is the best movie ever!'
}
// console.log(bestMovie('dog'))




// Write an arrow function called 'compareNums' that takes in 2 parameters,
// which will be numbers.
// The function should return the bigger number.
// If the numbers are the same, just return the number.
const compareNums = (num1, num2) => {
  if (num1 > num2) {
    return num1
  } else if (num1 < num2) {
  return num2
  } else {
    return num1
  }
}
// console.log(compareNums(1,2))
// console.log(compareNums(2,2))
// console.log(compareNums(2,3))




const foods = [
  {
    name: 'bread',
    carbs: 36,
    protein: 8,
    fat: 2,
  },
  {
    name: 'mayo mustard mix',
    carbs: 0,
    protein: 0,
    fat: 10,
  },
  {
    name: 'turkey',
    carbs: 0,
    protein: 25,
    fat: 1,
  },
  {
    name: 'cheese',
    carbs: 0,
    protein: 5,
    fat: 7,
  },
];

// Use the .forEach method to modify each food object in the foods array above to include calories.
// Calories can be calculated by multiplying carbs by 4, protein by 4, fat by 9,
// and then adding the results together.
function addCalories() 
{
//   foods.forEach(element, index, array){
//     let calories = (foods.carbs * 4) + (foods.protein * 4) + (foods.fat * 9)
    
//   }
//   return calories
} 
// console.log(addCalories())
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// For problems 2-4, you will be working with the products array below.
// Think of this array as a store's inventory.
const products = [
  {
    name: 'backpack',
    color: ['red', 'yellow'],
    price: 500,
  },
  {
    name: 'shirt',
    color: ['blue'],
    price: 400,
  },
  {
    name: 'shoes',
    color: ['red'],
    price: 1200,
  },
  {
    name: 'socks',
    color: ['yellow', 'blue'],
    price: 200,
  },
  {
    name: 'pants',
    color: ['blue', 'red'],
    price: 1000,
  },
];

// You've decided to have a sale on everything you have in stock. It's all going to be 25% off.
// Using the map method, make a copy of your products array with the prices reduced by 25%
// and return it.


function getSaleProducts() {
// let getSaleProducts = products.map() => {
} 

// A customer has placed an order - they want one of every product that has blue on it.
// Using the filter method return the products that have blue in their color array
// to a new variable called 'blueProducts' and return it.
// (Hint: look up the array method 'includes' on MDN)
function getBlueProducts() {
  
}

// Get the total price of all the products using the reduce method.
// function getTotalPrice() {
    
// }
const getTotalPrice = (acc, curr) => {
  // newPrice = products.price.reduce(acc, curr) => {
  //   let price = curr
  //   return acc + price
  // },0)
}
// console.log(getTotalPrice())





export {
  addCalories,
  bestMovie,
  compareNums,
  foods,
  getBlueProducts,
  getSaleProducts,
  getTotalPrice,
  giveMeTwo,
  products,
};
