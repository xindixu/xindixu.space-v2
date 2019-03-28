# Functional Porgramming
functions map input to output to produce a result 
- core principles 
  - functions are independent from the state of the program or global variables. they only depend on the arguments passed into them to make a calculation 
  - functions try to limit any changes to the state of the program and avoid changes to the global objects holding data
  - functions have minimal side effects in the program 


### Functional Programming Is About:
- isolated functions: there is no dependence on the state of the program 
- pure functions: the same input always gives the same output
- functions with limited side effects: any changes, or mutations, to the sate of the program outside the function are carefully controlled

### Functional Programming Terminology
- `callbacks`
the functions that are passed into another function to decide the invocation of that function 
```js
arr.filter((val)=>val>4);
```
- `first class` functions
functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value 
all functions are first class functions in js

- `higher order` functions
functions that take a function as an argument, or return a function as a return value 

- `lambda`
when functions are passed into nother function, or returned from another function, then those functions get passed in or returned called a `lambda`

```js
/**
 * A long process to prepare green tea.
 * @return {string} A cup of green tea.
 **/
const prepareGreenTea = () => 'greenTea';

/**
 * A long process to prepare black tea.
 * @return {string} A cup of black tea.
 **/
const prepareBlackTea = () => 'blackTea';

/**
 * Get given number of cups of tea.
 * @param {function():string} prepareTea The type of tea preparing function.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea(); // call the corresponding function passed by parameter
    teaCups.push(teaCup);
  }

  return teaCups;
};

const tea4GreenTeamFCC = getTea(prepareGreenTea,27); 
const tea4BlackTeamFCC = getTea(prepareBlackTea,13); 

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);
```

### The Hazards of Using Impreative Code
**imperative programming**: uses statements that change a program's state; focues on describing *how* a program operates
`for(let a of arr)`
**declarative programming**: building the structure and elements of program; focues on describing *what* a program should do (logic of a computation without describing its control flow)

### Avoid Mutation and Side Effects Using Functional Programming
`mutation`: change things
`side effect`: outcome of mutation
`pure function`: function that doesn't cause any side effects, ideal functions

`arr.splice(beg,numItemsToDel);` - mutate the array
`arr.slice(beg,end);` - will not mutate the array

### Pass Argument to Avoid External Dependence in a Function
always declare dependencies explicitly 
if the function depends on a variable or object, then pass that variable or object directly into the function as arguments
the function would always produce the same output for the same set of inputs, no matter what part of the code executes it 

### Refactor Global Variables Out of Functions
```js
let bookList = ["xxx","yyy","zzz"]
// bad
function add (bookName) {
  return bookList.push(bookName);
}

function remove (bookName) {
  if (bookList.indexOf(bookName) >= 0) {
    return bookList.splice(0, 1, bookName);
    }
}

// good
function add(list, bookName){
  return [...list, bookName];
}
function remove(list, bookName){
  let newList = [...list];
  let index = newList.indexOf(bookName);
  if(index >= 0){
    return newList.splice(index, 1);
  }
}
```

### Functions as Arguments, Return a Function from another Function
`first class objects`: functions are considered as first class objects, which means they can be used like any other object; they can be saved in varibales, stored in an object, or passed as a function arguments 
`Array.prototype.map()`
iterate through each item in an array, creates a new array *without changing* the original one after applying a `callback` function to every element 

```js
rating = watchList.map( (obj) => ({"title":obj["Title"], "rating":obj["imdbRating"]}) );
```

*side node - callback*
a callback is a function that is to be executed after another function has finished executing ---- hence, the name "callback"

functions are objects, so functions can be passed into other functions as arguments. 
`function a(b);`
functions that accepts this are called **higher-order functions** (function a)
functions that are passed as an argument is called a **callback function**

JavaScript is an event-driven language. Callbacks are a way to make sure certain code doesn't execute until other code has already finished execution

```js
function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`);
  callback();
}

doHomework('math', function() {
  alert('Finished my homework');
});

// define callback functions elsewhere
function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`);
  callback();
}
function alertFinished(){
  alert('Finished my homework');
}
doHomework('math', alertFinished); // pass in alertFinished as an argument 
```

#### Exercises for callback functions
- implementing `map()` function
```js
Array.prototype.myMap = function(callback){
  var newArray = [];
  this.forEach((a) => newArray.push(callback(a)));
  return newArray;
}

var new_s = s.myMap(function(item){
  return item * 2;
});
```
- implementing `filter()` function
```js
Array.prototype.myFilter = function(callback){
  var newArray = [];
  this.forEach((a) => {
    callback(a) ? newArray.push(a) : null;
  })
  return newArray;
}


var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
```

#### Exercise for non-mutating functions 
- `concat()` instead of `push()`
- `reduce()`
```js
var averageRating;
let ratings = watchList.filter((obj) => obj["Director"] == "Christopher Nolan").map((obj) => parseFloat(obj["imdbRating"]));
console.log(ratings);
averageRating = ratings.reduce((acc,cur) => acc + cur)/ratings.length;

// Add your code above this line

console.log(averageRating); 
```
- `sort()`
```js
arr.sort(function(a,b){
  return a < b; //reversed order
})
```
If `function(a,b)` is less than 0, sort a to an index lower than b, i.e. a comes first.



- every() to check that every element in an array meets a criteria 
- some() to check if any element in an array meets a criteria 

## Currying function & partial application
- `arity` of a function is the number of arguments it requires
- `Currying` a function means to convert a function of N `arity` to N functions with 1 `arity`

```js
//Un-curried function  
function unCurried(x, y) {  
  return x + y;  
}  
  
//Curried function  
function curried(x) {  
  return function(y) {  
    return x + y;  
  }  
}  
curried(1)(2) // Returns 3
```

```js
//Impartial function  
function impartial(x, y, z) {  
  return x + y + z;  
}  
var partialFn = impartial.bind(this, 1, 2);  
partialFn(10); // Returns 13
```
