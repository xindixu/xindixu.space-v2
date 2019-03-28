# Object Oriented Programming Challenges
Core of software development: solve a problem or achieve a result with computation 
define a problem => presents a solution
OOP is one of several major approaches to the software development process

organize code into object definitions
data => properties, behavior => methods

inherit from parent class 

### Types of Properties
- own properties 
- prototype propertoes 

Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype
```js
for(let prop in beagle){
  beagle.hasOwnProperty(prop) ? ownProps.push(prop) : prototypeProps.push(prop);
}
```

### Prototype 
```js
let casper = new Cat();

Cat.prototype = {
  numLegs: 2,
  eat: () => {
    // some function
  }
}
```

- Define the constructor
when we manually set the prototype to a new object, it erased the constructor property
so...
```js
Bird.prototype = {
  constructor: Bird,
  ...
}
```
- Check the class
`Cat.prototype.isPrototypeOf(capser)`
`casper instanceof Cat`
if there is no constructor, instance of will fail 
otherwise it is preferred

### Inheritance
- Object is a supertype for all objects
Object.prototype is a prototype for all object.prototype
all objects have a prototype, and all objects' prototype is an object

- create
```js
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Add your code below this line
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();
```
normal creation:
`Bird = new Animal()`
inheritance creation:
`Bird.prototype = Object.create(Animal.prototype)`

- Add child function
```js
function Dog(){ }

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = () => {
  console.log("woof!");
}
```
- Overriding 
define the child function with the same name of the parent class

- Mixing: add common behavior between unrelated objects
```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Add your code below this line

let glideMixin = (obj) => {
    obj.glide = (obj) => {
        console.log("");
    }
}

glideMixin(bird);
glideMixin(boat);
```
- Closure
  - protect properties from being modified externaly 
  - to make properties private, create the variabes inside the constructor function 
  - a function always has access to the context in which it was created. This is called `closure`.
```js
function Bird() {
  let weight = 15;
  this.getWeight = () => {
    return weight;
  }
}
```

### Module
#### Immediately Invoked Function Expression (IIFE)
```js
(function () {
  console.log("Chirp, chirp!");
})(); 
```
- no name and is not stroed in a variable 
- the () at the end cause it to be immediately executed 

#### Use IIFE to create a module
module: group related functionalities 
other parts of the code can use the functions 

```js
let motionModule = (function () {
  return {
    glideMixin: function (obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
}) (); // The two parentheses cause the function to be immediately invoked
```
to use:
```js
motionModule.glideMixin(duck);
duck.glide();
```