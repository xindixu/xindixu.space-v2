# JS Object Paradigm & Prototypes

https://levelup.gitconnected.com/the-javascript-object-paradigm-and-prototypes-explained-simply-e9cb9eaa49aa


## Objects
list of key/value pairs 
```js
{
  age:8
  weight:65
}
```

## Functions are Objects
```js
function bark(){
  console.log('woof')
}
```

## Function-object 
```js
function Dog(age, weight){
  this.species = 'Canis Familiaris'
  this.age = age
  this.weight = weight 
  this.bark = function(){
    console.log('woof')
  }
}

let Spot = new Dag(8,65)
let Bingo = new Dag(10,70)
```
function-object: pack a group of data (properties and functions) togehter and create multiple objects 
instance-object: call `new`, return with properties set from the `this` keyword inside the functions 

## Prototypes
special type of object and exist as a property on function-objects 
access a key on a function-object -> loot at its `prototype` property to see if it's there 
if not, it will go up to the prototype chain and try to find it 

## Functions and inheritance 
when an instance-object is returned from `new`, it contains a property with key `__proto__` with value `prototype` property of the function that created it 
```js
Bingo.__proto__ === Dog.prototype 
Spot.__proto__ === Dog.prototype 
```
when accessing a property on an instance-object and it is not there (`this.bark()`), it will first go to `__proto__` and see if it is on parent function's prototype 
```js
Dog.prototype.bark = function(){
  console.log('woof')
}
Bingo.bark()
```
benefit of doing it: it will not create a `this.bark()` when calling `new` -> same performance and memory 


## Inheritance
all instance-object inherit form `Object`, which is a function-object
`let k = new Object()` => `k.__proto__ === Object.prototype`
all objects made from object-literals are instance-object of `Object` 
`Object` has function like `hasOwnProperty` -> since all objects are instance-object of `Object`-> all objects have this function 


### Object literal
```js
let insect = {
  legs: 6
}

insect.__proto__ === Object.prototype
insect.hasOwnProperty === Object.prototype.hasOwnProperty

insect.hasOwnProperty('legs') //true
```

### Instance-Object
```js
let Bingo = new Dog()
Bingo.__proto__ === Dog.prototype
Dog.prototype.__proto__ === Object.prototype

// Bingo is an instance object
// Dog is a function object 
```

### Function-object
```js
function Dog(){
  this.family: 'canine'
}
Dog.prototype.__proto__ === Object.prototype
// because everything is an instance of Object 
Dog.hasOwnProperty('name') // true ('Dog')
Dog.hasOwnProperty('family') // false => set on instance-object, not on the function
```

## `__proto__` of Function-objects
built-in function-object called `Function` 
every function's `__proto__` points to `Function.prototype`
it is a function but doesn't have `prototype` property and returns `undefined`
`Function.prototype` defines the default behavior that all functions inherit from 
it still has `__proto__` which points to `Object.prototype`

```js
Dog.__proto__ === Function.prototype       
Object.__proto__ === Function.prototype    
Function.__proto__ === Function.prototype  
Function.prototype.__proto__ === Object.prototype
```

## Multi-level inheritance 
```js
function Labrador(furColor, age, weight) {
    this.furColor = furColor
    this.breed = 'labrador'
    Dog.call(this, age, weight)
}
Labrador.prototype = Object.create(Dog.prototype)
var Fido = new Labrador('white', 4, 41)
Fido.bark()
```
`Parent.call(this, arg)` call the parent constuctor 

`Labrador.prototype = Object.create(Dog.prototype)`
create sub prototype from parent prototype

## ES6 

```js
function Dog(age, weight){
  this.age = age
  this.weight = weight
}

Dog.prototype.bark = function(){
  console.log('woof')
}

function Labrador(furColor, age, weight){
  this.furColor = furColor
  this.breed = 'labrador'
  Dog.call(this,age,weight)
}

Labrador.prototype = Object.create(Dog.prototype)
```

```js
class Dog {
  constructor(age,weight){
    this.age = age
    this.weight = weight
  }
  
  bark(){
    console.log('woof')
  }
}

class Labrador extends Dog {
  constructor(furColor, age, weight){
    super(age, weight)
    this.furColor = furColor
    this.breed = 'labrador'
  }
}
```

## Object vs. Primitives 
5 primitive: boolean, number, string, null, undefined
boolean, number, string all have object counterparts to wrap around for certian operations 

`String.prototype.__proto__ === Object.prototype`
