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

  orderPizza : function (mainIngredient,second,...othersIngredients) {
    console.log(mainIngredient);
    console.log(second);
    console.log(othersIngredients);
  }
};
/*
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// the lopping Array - the - for - of loop

const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
// for(const item of menu) console.log(item);

for(const item of menu.entries()){
    console.log(`${item[0] + 1} : ${item[1]}`);
}

//              ( OR )
console.log('-----------------------------------')
for(const [i,el] of menu.entries()){
  console.log(`${i+1} : ${el}`);
}
// use ( ...item )
// console.log(...menu.entries());                                              // menu.entries() - not use - use panna mudiyadhu

// console.log('--- Normal For loop ---')
// for (let i = 0 ; i < menu.length ; i++){
  // console.log(menu[i]);
// };

// console.log('--- Array For of loop ---')
// for(const item of menu) console.log(item);

// const family = ['Lakshmana Raj','Kavitha','Surya','Bala'];
// for(const name of family) console.log(name);                            // also use -- ( ...name / [...name] / [name] )

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// ---- Coding Challenge ----

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
const [player1,player2] = game.players;
// console.log(player1);
// console.log(player2);

// 2.
const [gk1,...fieldPlayer1] = player1;
const [gk2,...fieldPlayer2] = player2;
// console.log(gk1,fieldPlayer1);
// console.log(gk2,fieldPlayer2);

// 3.
const allPlayers = [...player1,...player2];
// console.log(allPlayers);

// 4.
const playersFinal = [...player1,'Thiago','Coutinho','Periscic'];

--- my ---
const playersFinal = [...player1,prompt('Enter sub name 1'),prompt('Enter sub name 2'),prompt('Enter sub name 3')];
console.log(playersFinal);

// 5.
// const {odds: {team1,x: draw,team2}} = game;
const {team1,x: draw,team2} = game.odds;
// console.log(team1,draw,team2);

// 6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
}

// printGoals('Davies','Kimmich','Muller','Lewandowski');
// printGoals('Hummels','Weigl');
// printGoals(...game.scored);

// 7.

team1 > team2 && console.log(`Team 1 is more likely to win`);
team1 < team2 && console.log(`Team 2 is more likely to win`);

// My solution
// const {players : [a,b]} = game;
// console.log(...a,...b);

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// LOCAL ASSIGNMENT OPERATOR

const rest1 = {
  name : 'KFC',
  // numGuests : 20,
  numGuests : 0,
}

const rest2 = {
  name : 'DOMINOS',
  owner : 'Balaguru',
}

// OR Assignment Operator

// rest1.owner = rest1.owner || 'Surya';

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
//          ( OR )
// rest1.numGuests ||= 10;                     // numGuests truthy so print - 20 -
// rest2.numGuests ||= 10;                     // numGuests falsy so print - 10 -


// Nullish Operator ( null or undefind )

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;                         // numGuest undefined so print - 10 -

// AND Assignment Operator

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
//          ( OR )
rest1.owner &&= rest1.owner;
rest2.owner &&= rest2.owner;

console.log(rest1);
console.log(rest2);

// NULLISH value  : null and undefined (NOT 0 or '')         NOT affactd 0 and ''(empty String)

console.log(2 ?? 'Bala');
console.log(0 ?? 'Bala');
console.log('' ?? 0 ?? 'Bala');
console.log(undefined ?? null ?? 'Bala');
console.log(null ?? undefined);
console.log('Hello' ?? undefined ?? '' ?? 0 ?? 2 ?? null);

restaurant.newGuess = 0;

const guess1 = restaurant.newGuess || 10 ;
console.log(guess1);

// NULLISH value  : null and undefined (NOT 0 or '')         NOT affactd 0 and ''(empty String)
const guess2 = restaurant.newGuess ?? 10 ;
console.log(guess2);

//  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// Short Circuit && and ||

// --------- OR ( || )                    // First truthy Value print ( Any One truth )

console.log('----  (OR) ----');
console.log(2 || 'Bala');
console.log(0 || 'Bala');
console.log('' || 0 || 'Bala');
console.log(undefined || null);
console.log(null || undefined);
console.log(0 || undefined || '' || 'Hello' || 2 || null);

// restaurant.newGuess = 23;

const guess1 = restaurant.newGuess ? restaurant.newGuess : 10;
console.log(guess1);
//                ( OR )
const guess2 = restaurant.newGuess || 10 ;
console.log(guess2);

// ---------- AND ( && )                  //  First falsy Value print ( Any One falsy )  all value true pakkum

console.log('----  (AND) ----');
console.log(2 && 'Bala');
console.log(0 && 'Bala');
console.log('' && 0 && 'Bala');
console.log(undefined && null);
console.log(null && undefined);
console.log(0 && undefined && '' && 'Hello' && 2 && null);

if (restaurant.orderPizza) {
  restaurant.orderPizza('Mushroom','spinach','Bread','Chezze')
};

restaurant.orderPizza && restaurant.orderPizza('Mushroom','spinach','Bread','Chezze')

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// ---- RestPattern and Parameters ----

// --- functions ---

const add = function (...numbers) {
  console.log(numbers);
  console.log(...numbers);                    // Spread operator
  let sum = 0;
  for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];                        //(console) for loopku inside pota oru oru dhadavaiyum sum  varum
  };
  console.log(sum);                           //(console) for loopku veliya pota total sum varum
};

add(2,3);
add(2,5,7,5,8,9,3);

const x =[25,7,4];
add(...x);

// object - function

restaurant.orderPizza('Bread','Chees','oil','Mionees');

// SPEARD because on - Right side - of =

const arr = [1,2,...[3,4]];
console.log(arr);

// REST because on - Left side - of =

// --- array ---
const [a, ,b,...others] = [1,2,3,4,5,6];
console.log(a,b,others);

const [food1,food2,...otherFood] = [...restaurant.mainMenu,...restaurant.starterMenu];
console.log(food1,food2,otherFood);

// ---- object ----
const {sat,...weekDays} = restaurant.openingHours;
console.log(sat,weekDays);

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
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












