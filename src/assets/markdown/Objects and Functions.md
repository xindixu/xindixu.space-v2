# Objects and Functions
-- Understanding the Weird Part of JavaScript

# Objects and the Dot 
Object - collections of name/value pairs
Object contains:
- Primitive "property"
- Object "property"
- Function "method"
Object has references to these memory slot 

```js
var person = new Object();

person["firstname"] = "Tony"; // property 
person["lastname"] = "Alica";

var firstnameProperty = "firstname"
console.log(person)
console.log(person["firstname"])
console.log(person.firstname)
```
[] - computed member access 
. - member access (this is preferred)

# Obejcts and Object Literals
object literals - {}
the preferred way to create a object

```js
var person = { 
  firstname: "Tony", 
  lastname: "Alicea",
  address: {
    street: "111 Main St.",
    city: "New York",
    state: "NY"
  }
} 
// it is treated as one line of code
```

```js
function greet(person){
  console.log('Hi ' + person.firstname)
}

greet({
  firstname: "Mary",
  lastname: "Doe"
})
```
create an object on the fly 

# *Framework Aside* - Faking Namespace
a container for variables and functions 
typically to keep varibales and functions with the same name separate

there is no namespace in JS, but we could use objects to fake it 

```js
var english = {
  greet:'hello';
}
var spanish = {
  greet:'hola';
}

english.greetings.greet = "hello" // error since greetings is undefined

var english = {
  greetings: {
    greet: "hello"
  }
}
```

# JSON 
JavaScript object notation 
faster way to send data 
old days:
```html
<object>
  <firstname>Mary</firstname>
  <isAProgrammer>true</isAProgrammer>
</object>
```

JSON is a subset of js literal syntax 

```js
// valid json & js literal syntax
// name must be surrounded in ""; function cannot be a value
{
  "firstname": "Mary",
  "isAProgrammer": true
}

// valid js literal syntax only
var mary = {
  firstname: "Mary",
  isAProgrammer: true
}

// convert between JS and JSON
JSON.stringify(mary);  
JSON.parse('{
  "firstname": "Mary",
  "isAProgrammer": true
}');
```

# Functions are Objects
## First calss functions
everything you can do with other types you can do with functions 
assiggn them to vairables, pas them around, create them on the fly 

function - a special type of object 
function could contain, just like object:
- primitive
- object
- function 
function could also contain what objects cannot have:
- name(optional, can be anonymmous)
- code(invocable, which means execution context)


```js
```

