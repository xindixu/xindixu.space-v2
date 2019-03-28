# Types and Operators
-- Understanding the Weird Part of JavaScript

# *Conceptual aside* Types and JS
## Dynamic typing 
you don't tell the engine which type of data it holds, it figures out while your code is running
so, variables can hold different types of values 

# Primitive Types
a type of data that represents a single value
that is, not an object 
- undefined
lack of existence (you shouldn't set a variable to this) 
- null
lack of exsitence (you can set a variable to this)
- boolean 
- number 
floating point number (there is always some decimals)
- string 
both '' or ""
- symbol 
(new in ES6) unique identifers; return a long random string 
  - usage 
  1. making private object properties, which can be only type of String or Symbol 
  ```js
  const sym = Symbol()
  const foo = {
    [sym]: 'someValue'
  }
  foo[sym] // 'someValue'
  ```
    advantages: hiding certian properties that might name clash with other libraries
  
  2. defining metadata on an object, since Symbols are not enumarable, so that it will not iterated over when using `for...of` loop, and other
  ```js
  const sym = Symbol()
  const foo = {
    name: 'Ben',
    age: 25,
    [sym]: 'someHiddenMetadata'
  }
  for(let val of foo) {
    console.log(val) // Ben, 25
  }
  Object.getOwnPropertyNames(foo) // Ben, 25
  Object.keys(foo) // Ben, 25
  ```
  3. global symbols
  ```js
    const foo = Symbol.for('hello') // If the Symbol does not exist, it's created

  const bar = Symbol.for('hello') // The Symbol exists, so it is returned

  foo === bar // true
  ```
https://dev.to/mildrenben/symbols-in-es6---a-quick-guide-dhm

# *Conceptual Aside* Operators
## Operators
a special function that is syntactically written differently 
generally, operators take two parameters and return one result 

```js
var a = 3 + 4
// which is equals to this
function + (a,b) {
  return a + b
}
```
infix notation: a + b
prefix notation: +a b
postfix notation: a b+

# Operator Precedence and Associativity
## Precedence
which operator function gets called first 
functions are called in order of precedence 
## Associativity
what order operator functions get called in: left-to-right(left associativity) or right-to-left(right associativity), when functions have the same precedence


[Operator precedence \| MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)


# *Conceptual aside* Coerision 
converting a value from one type to another 
```js
var a = 1 + '2'; // 12 instead of 3
```

# Comparison Operators
```js
console.log(3 < 2 < 1) // ->
console.log(false < 1) // ->
console.log(0 < 1) // true

Number(undefined) //NaN (not a number)
Number(null) // 0
```
coerision is powerful, but dangerous 
```js
false == 0 // true
undefined == 0 // true
```

strict equality `===`
[Equality comparisons and sameness \| MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

# Existence and Boolean 
`Boolean("")`, `Boolean(undefined)`, `Boolean(0),` `Boolean(null)` all convert to `false`

# Default Values
```js
function greet(name){
  console.log('Hello' + name)
}
greet() // Hello undefined
```
set default value for name

```js
function greet(name){
  name = undefined || '<name here>'
  console.log('Hello' + name)
}
greet() // Hello undefined
```

```js
undefined || 'hello'  // hello
null || 'hello' // hello
'' || 'hello' // hello
```

`||` will return the first value which converts to true
be careful for name=0

# Framework Aside
 ```html
 <body>
  <script src="lib1.js"></script>
  <script src="lib2.js"></script>
  <script src="app.js"></script>
</body>
 ```
 ```js
 //lib1.js
 var libName = 'lib1'
 ```
  ```js
 //lib2.js
 var libName = 'lib2'
 ``` 
 ```js
 //app.js
 console.log(libName) // lib2
 ```
 it is bascially going to stack everything, combine all the files together
 so it is dangerous to put things in the global variable 
 trick: `window.libName = window.libName || 'lib2'`
 