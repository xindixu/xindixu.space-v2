# ES6

### var, let, const
|          	| var      	| let                        	| const                      	|
|----------	|----------	|----------------------------	|----------------------------	|
| redeclare | yes      	| no                         	| no                         	|
| reassign  | yes      	| yes                        	| no                         	|
| scope    	| function 	| block,statement,expression 	| block,statement,expression 	|

#### redeclare
**var** allows redeclaring the variable

```javascript
var a = "Meow";
var a = "Woof";
console.log(a); //log "Woof"
```
**let & const** does not allow redeclaring
```javascript
let b = "Meow";
let b = "Woof"; // throws an error

const C = "Meow";
const C = "Woof"; // throws an error
```

*use strict* 
error if no declare
```javascript
'use strict';
x = 3.14 // throws an error because x is not declared
```

#### scope
**var** - global/local in function 
```javascript
var a; //global

function foo(){
  var b; //local
}
```

**let & const**- gloabl/local in block, statement, expression

*example - compare:*
var: 
```javascript
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if(i === 2){
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
// returns 3
```
1. var i - global because it is not declared in a function 
2. equal to `var i; for(i = 0; i < 3; i++){}`
3. after for loop, console.log calls printNumTwo() 
4. var i, which is globle, has been updated to 3

<br>
let:

```javascript
"use strict";
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
// returns 2
console.log(i);
// returns "i is not defined"
```
1. since let does not allow redeclaring, let creates three different `i` variables with values (0,1,2), so function returns correctly 
2. within the loop statement, so it can't be accessed outside

#### reassign 
**var & let** - allow reassign 
**const** - does not allow reassign
```javascript
"use strict"
const FAV_PET = "Cats";
FAV_PET = "Dogs"; // returns error
```
but it is still mutable 
```javascript
"use strict";
const s = [5, 6, 7];
s = [1, 2, 3]; // throws error, trying to assign a const
s[2] = 45; // works just as it would with an array declared with var or let
console.log(s); // returns [5, 6, 45]
```
const naming common practice: ALL_CAPS


### Prevent object mutation 
`Object.freeze(obj)`
once freeze the object, you can no longer add, update, or delete properties

### Arrow functions
- Anonymous function
function that has no name = inline functions
```javascript
const foo = function() {
  const v = "value";
  return v;
}
```
- ES6 arrow function
```javascript
const foo = () =>{
  const v = "value";
  return v;
}
```
- function with only return value, no body
obmit the return keywords
```javascript
const foo = () => "value"
```
- with parameter
```javascript
const doubler = (num) => num * 2;
```

*sidenote*
```javascript
// mutatable function
function add(x,y){return x+y;}
console.log(add(1,2)); //3
add = function (x,y){return x-y;} // mutate the function :(

// not mutatable function with const
const add = function(x,y){return x+y;}
// or ES6
const add = (x,y) => x + y;
add = (x,y) => x - y; // error because of const
```

#### Higer order arrow functions
##### filter()
```javascript
FBPosts.filter((post) => post.thumbnail != null && post.shares > 100 && post.likes > 500);
```
##### map()
```javascript
arr.map((num) => num * 2));
```
##### reduce()
```javascript
[0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue;
}, 10);
```
.reduce() starts from currentIndex, default is 0

##### Chaining functions
```javascript
  const squaredIntegers = arr.filter((num) => num > 0 && Number.isInteger(num)).map((num) => num * num);
```
### Operators 
- function parameter with default value
function(arg1 = 1, arg2){}

#### spread operator 
spread the array to its elements
- spread to unpack the array
```javascript
function maximus = Math.max(...arr);
// Math.max() accepts comma-separated parameters, but not an array
// ...arr returns an unpacked array; it spreads the array
```
```javascript
function addThreeNumbers(x,y,z){
  return x+y+z;
}
var args = [0,1,2,3]
addThreeNumbers(...args) //return 0+1+2, ignores 3
```

- copy arrays
```javascript
const arr = [1,2,3];
const arr2 = [...arr]; // declare a new arr2 and copy value of arr to arr2
const spreaded = ...arr; // error!
```

- concate arrays
```javascript
var arr1 = [0,1,2];
var arr2 = [3,4,5];
arr1 = [...arr1,"mmm",...arr2]; 
```

#### rest operator
collect elements and pack them into an array
able to use array methods, since it is an array now 
```javascript
function sum(...args){
  return args.reduce((acc,cur) => acc + cur,0);
sum(1,2,3,4,5,3);
}
```

### Destructuring assignment 
assigning values to multiple variables from an object 
ES5:
```javascript
var voxel = {x: 3.6, y: 7.4, z: 6.54 };
var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54
```
#### to object
ES6:
- basic
```javascript
const {x,y,z} = voxel; // x = 3.6, y = 7.4, z = 6.54
```
- rename
"get the field x and copy the value into a"
```javascript
const {x:a, y:b, z:c} = voxel; // a = 3.6, b = 7.4, c = 6.54
```
- nested object
```javascript
const a = {
  start: { x: 5, y: 6},
  end: { x: 6, y: -9 }
};
const { start : { x: startX, y: startY }} = a;
console.log(startX, startY); // 5, 6
```
#### to array
- basic
```javascript
const [a,b,,,c] = [1,2,3,4,5,6];
console.log(a,b,c); //1,2,5
```
- to swap values
```javascript
let a = 8, b = 6;
(() => {
  [a,b] = [b,a];
})();
```
- to reassign array elements
similar to Array.prototype.slice()
```javascript
const [a,b,...arr] = [1,2,3,4,5,6];
// a = 1, b = 2, arr = [3,4,5,6]
```
#### to function 
destruct object in a function arg
```javascript
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  "use strict"; 
  return function half({max,min}) {
    // use function argument destructuring
    return (max + min) / 2.0;
  };

})();
console.log(stats); //  object
console.log(half(stats)); // 28.015

// =>
const half = ({max,min}) => (max + min) / 2.0;

```


### Template literals 
```javascript
const person = {
  name: "Zodiac Hasbro",
  age: 56
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting); // prints
// Hello, my name is Zodiac Hasbro!
// I am 56 years old.
```
1. backticks(``) to wrap the string
2. multiline output, without \n
3. ${variable} / ${a + b}

```javascript
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";
  const resultDisplayArray = arr.map((item) => `<li class="text-warning">${item}</li>`)
  return resultDisplayArray;
}
const resultDisplayArray = makeList(result.failure);
```

### Object literal
`const getMousePos = (x,y) => { x,y };`
which is the same as:
`const getMousePos = (x,y) => { x:x, y:y };`

### Function in a Object
```javascript
//ES 5
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};

//ES 6
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

### Class syntax
*this is just a syntax, not a real class based on implementation of object oriented programming*

class is a special function
#### Constructor
```javascript
// ES5
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');

// ES6
class SpaceShuttle {
  constructor(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
}
var zeus = new SpaceShuttle('Jupiter');
```

#### Getter & setter

```javascript
class Thermostat{
  constructor(farenheit){
    this.farenheit = farenheit;
  }
  get temperature(){
    return 5 / 9 * (this.farenheit - 32);
  }
  set temperature(celsius){
    this.farenheit = celsius * 9.0 / 5 + 32;
  }
}
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
```

### Import & export
- require(ES5)
require() - import the code in external files and modules
- import(ES6)
  - import partial
`import { } from "path/to/file"`
only import parts of a module or file, save time and memory 
file path starts with `./` in most cases; otherwise it will load from `node_modules`
  - import all 
`import * as name from "path/to/file"`
  - import export default
`import add from "path/to/file"`
- export
  - named export
`export { capitalizeString } //How to export functions.`
`export const foo = "bar"; //How to export variables.`
`export { capitalizeString, foo } //Compact` 
  - export default
`export default function add(x,y){
  return x + y;
}`
