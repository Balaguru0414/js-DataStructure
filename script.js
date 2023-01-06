'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order:function (starterIndex,mainIndex) {
    // console.log(this);
    return [this.starterMenu[starterIndex],this.starterMenu[mainIndex]];   //  restarunt.startMneu[2]
  },

  orderDelivery : function ({                            // set default value
    starterIndex = 1,
    mainIndex = 0,
    time = 23.35,
    address = 'No, 10 EB Road',
  }) {                      
    console.log(`Order Delivered ,${this.name}!!,
      ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
will be Delivered to ${address}, at ${time}. `);
  },

  orderPasta : function (ing1,ing2,ing3) {
    console.log(`Here is your delicious Pasta with ${ing1},${ing2} and ${ing3}.`);
  },
};


/*
// ---- Spread operator ----

// -----  objects  ------

const newRestaurant = {            // add key and value
  foundIn : 2000,
  founder : 'BalaGuru',
  ...restaurant,
};
console.log(newRestaurant);

restaurant.founder = 'Surya';
console.log(restaurant);          // original poi key and value set panna


const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Dominos';

console.log(restaurantCopy.name);
console.log(restaurant.name);

// -----   funcitons arguments   ------

const ingredients = [prompt('Let\'s make Pasta! Ingredient 1'),
  prompt('Ingredient 2'),prompt('ingredient 3')];

console.log(ingredients);

restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]);
//            ( or )
restaurant.orderPasta(...ingredients);


// ---- arrays  ------

const arr = [7,8,9]
const badNewArr = [1,2,arr[0],arr[1],arr[2]];
console.log(badNewArr);
//            ( or )
const newArr = [1,2,...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu,'Gnocci'];   // orginal not affected
console.log(newMenu);
// console.log(restaurant.mainMenu)

const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

const menu = [...restaurant.mainMenu,...restaurant.starterMenu];
console.log(menu);

// Iterables : arrray , strings, maps,sets.Not objects

const str = 'Bala';
console.log(...str);          // individual letters in console
const letters = [...str,'','L.'];
console.log(letters);         // individual element in array

// console.log(`${...str} hi`)    --- this is not working

// distucture object in function

// restaurant.orderDelivery({                              // set key and value
//   name : 'Bala',
//   time : 22.22,
//   address : '16 , a sankaran pillai road - Trichy - 2',
//   mainIndex : 2,
//   starterIndex : 2,
// });

restaurant.orderDelivery({                              
  address : '16 , a sankaran pillai road - Trichy - 2',
  starterIndex : 2,
  mainIndex : 1,
});

// destrucstion object

const {name,openingHours,categories} = restaurant;
// console.log(name,openingHours,categories);

const {
  name: restaurantName,
  openingHours : hours,
  categories: tags
} = restaurant;
console.log(restaurantName,hours,tags);

const {
  menu = [],
  starterMenu : starter,        // starter = starterMenu
} = restaurant;

console.log(menu,starter);

// mutated Variables

let a = 111;
let b = 222;
const obj = {a : 27,b : 7,c : 14};
({a,b} = obj);                                  // {}  --  block variables
console.log(a,b);

// nested Object

const {
  fri : f,                                // f = {open: 11, close: 23}
  fri:{open : o,close : p},               // fri:{open,close} = 11 23
} = openingHours;  

console.log(f,o,p)                        // console.log(fri,open,close) = 11 23

const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

const [x,y,z] = arr;   // [x,y,z] = [2,3,4] ----  x = 2 , y = 3 , z = 4
console.log(x,y,z);

let [first, , ,second] = restaurant.categories; // space is skip the value

console.log(first,second);

// switching variable

// const third = first;                   // swap values
// first = second;
// second = third;
// console.log(first,second);

[first,second] = [second,first];          // swap values
console.log(first,second);

// receive 2 returns valuesfrom a functions
console.log(restaurant.order(0,2));
const [firstDish,secondDish] = restaurant.order(0,2);
console.log(firstDish,secondDish);

// nested array distruturing
const nested = [2,4,[5,6]];
const [i, ,j] = nested;                  // normal distruction
console.log(i,j);
const [m, ,[n,o]] = nested;               // nested distruction
console.log(m,n,o);                     

// default values

// const [p,q,r] = [8,9];                 // r = undefined

const [p = 1,q = 1,r = 1] = [8,9];        // r = 1
console.log(p,q,r);

*/










