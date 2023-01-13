"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const weekDays = ["mon", "tue", "wed", "thu", "fri",'sat','sun'];

const openingHours = {
  [weekDays[3]] : {
    open: 12,
    close: 22,
  },
  [weekDays[4]] : {
    open: 11,
    close: 23,
  },
  [weekDays[5]] : {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES-6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    // console.log(this);
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; //  restarunt.startMneu[2]
  },

  orderDelivery({
    // set default value
    starterIndex = 1,
    mainIndex = 0,
    time = 23.35,
    address = "No, 10 EB Road",
  }) {
    console.log(`Order Delivered ,${this.name}!!,
      ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
will be Delivered to ${address}, at ${time}. `);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious Pasta with ${ing1},${ing2} and ${ing3}.`
    );
  },

  orderPizza: function (mainIngredient, second, ...othersIngredients) {
    console.log(mainIngredient);
    console.log(second);
    console.log(othersIngredients);
  },
};
/*
// Map Iteration

const question = new Map([
  ['question','What is the best programming language in the world ?'],
  [1,'C'],
  [2,'Java'],
  [3,'Java Script'],
  ['correct',3],
  [true,'Correct 🥳'],
  [false,'Try again 😞'],
  ]);
// console.log(question);

// convert object to Map
// console.log(Object.entries(openingHours));

const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);


console.log(question.get('question'));        // Don't Apply - Object.entries | because - MAP - have a Key And value
for (const [key,value] of question){
  if (typeof key === 'number') console.log(`Answer ${key} : ${value}`);
}

// const answer = Number(prompt(`${question.get('question')}`));
// console.log(answer);

// const correct = answer === question.get('correct') ? question.get(true) : question.get(false);
// console.log(correct);
//    -----   ( OR )
// console.log(question.get(question.get('correct') === answer));

// convert Array to Map
console.log([...question]);

console.log(question.keys());
console.log(question.values());

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Maps  
            //| it's Like Object
            //| object key only string - Map is somethig different
            //| key - We can put String,( numbers | Boolean | DOM Element | array | object )

const rest = new Map();

// set

rest.set('name','KFC');
rest.set(1,'Tamil Nadu, India');
// console.log(rest.set(2,'New york, America'));
rest.set('categories',["Italian", "Pizzeria", "Vegetarian", "Organic"])
.set('open',10)
.set('close',22)
.set(true,'We are open :)')
.set(false,'We are closed :(')

//  get
// console.log(rest.get('name'));                // console - KFC
// console.log(rest.get(true));                  // console - We are open :)

rest.set('order1','Pizza').set('order2','Pasta');
// console.log(rest.get('order1'));              // console - Pizza

const time = 11;
// console.log(rest.get( time > rest.get('open') && time < rest.get('close') ));    // we are open (or) close

// has
// console.log(rest.has('categories'));

// delete
rest.delete(2);

// size
// console.log(rest.size);

// clear
// rest.clear();

// use array in Map

// rest.set([1,2], 'Test');
// console.log(rest.get([1,2]));      // console - undefined

const arr = [1,2];
rest.set(arr,'Test');
// console.log(rest.get(arr));           // console - Test
// console.log(rest.get(arr[0]))         // console - Tamil Nadu, India --> Because arr[0] = 1

// Use DOM in Map
rest.set(document.querySelector('h1'),'Heading')
console.log(rest);

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Sets

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza'
  ]);

console.log(new Set('Bala'));
// size
console.log(orderSet.size);          // its not array --> so used ( - size - ) not length
// has
console.log(orderSet.has('Pizza')); 
console.log(orderSet.has('Bread'));
// add
orderSet.add('Bread');
// delete
orderSet.delete('Risotto');
// clear
// orderSet.clear();
console.log(orderSet);

for(const order of orderSet) console.log(order);

// Examples

const staff = ['Waiter','Chef','Waiter','Manager','Chef','Waiter'];
const staffUnique = new Set(staff);         // set is used { }
const staffUniques = [...new Set(staff)];    // create normal array - use set array

console.log(staff);
console.log(staffUnique);
console.log(staffUniques);

console.log(new Set(['Waiter','Chef','Waiter','Manager','Chef','Waiter']).size);
console.log(new Set('Balagururaja').size);          // 7 --- >  Balgurj - its only take

// Looping Object

// Property Names

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are opening ${properties.length} days :`

for(const day of properties){                       // for of loop
  openStr += `${day},`; 
};
console.log(openStr);

// Property Values

const values = Object.values(openingHours);
console.log(values);

// Property Enteries

const entries = Object.entries(openingHours);
console.log(entries);

// [key, values]

for(const [day,{open,close}] of entries){
  console.log(`On ${day} We are opening ${open} and close at ${close}`)
}

// optional Change  ( ?. )

// console.log(restaurant.openingHours.mon);
// console.log(restaurant.openingHours.mon?.open);

const days = ["mon", "tue", "wed", "thu", "fri",'sat','sun'];

for(const day of days){
  const open = restaurant.openingHours?.[day]?.open ?? 'closed';
  console.log(`on ${day}, we are open at ${open} `);
};

// Methods

console.log(restaurant.order?.(2,1) ?? 'Methods does not exist');

console.log(restaurant.orderRisoto ?. (1,1) ?? 'Methods does not exist');

// arrary

const users = [{name : 'Balaguru',email : 'balag0414@gmail.com'}];

console.log(users[0]?.name ?? 'array is empty');

console.log(users[0] > 0 ?? 'arrray is empty');

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

*/
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

// # Challenge 2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀


// ----------- My Lecture --------------

// 1.
console.log('---------  1 ---------');

for(const [i,player] of game.scored.entries()){
  console.log(`Goal ${i+1} : ${player}`);
};

// 2.
console.log('---------  2 ---------');

const odds = Object.values(game.odds);
console.log(odds);
let average = 0;

for(const odd of odds) average += odd;
  average /= odds.length;
console.log(average);

// 3.
console.log('---------  3 ---------');

for (const [team,odd] of Object.entries(game.odds)){
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} : ${odd}.`);
};

console.log(game.team1);

// 4. BONUS
console.log('---------  4 ---------');

const scorers = {} ;
// console.log (scorers)
for(const player of  game.scored){
  console.log(player);
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);
// ----------- My TRY --------------

// // 1.
// console.log('---------  1 ---------');

// const score = game.scored;
// console.log(score);

// for (const [key,value] of score.entries()){
//   console.log(`Goal ${key + 1} : ${value}`);
// };

// // 2.
// console.log('---------  2 ---------');

// const odd = Object.values(game.odds);
// // console.log(odd);

// let average = 0;
// let sum = 0;

// for (const a of odd){  
//    sum += a;
//    average = sum/3;
// }
// // console.log(sum);
// console.log(`Average is : ${average}.`);

/*

// # Challenge 1

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
