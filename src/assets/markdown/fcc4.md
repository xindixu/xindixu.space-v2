---
title: Debugging
lang: en-US
postDate: "Sept. 30, 2018"
sidebar: auto
prev: ./3-RegularExpression
---
# Debugging

## Three Types of Errors
1. Syntax error - often detected by the code editor

```javascript
funtion willNotWork( {
  console.log("Yuck");
}
// "function" keyword is misspelled and there's a missing parenthesis
```
2. Runtime error - often detected while the program executes

```javascript
function loopy() {
  while(true) {
    console.log("Hello, world!");
  }
}
// Calling loopy starts an infinite loop, which may crash your browser
```
3. Semantic error - often detected after testing code output
```javascript
function calcAreaOfRect(w, h) {
  return w + h; // This should be w * h
}
let myRectArea = calcAreaOfRect(2, 3);
// Correct syntax and the program executes, but this gives the wrong answer
```

## Process of Elimination
1. by function
2. start from the middle of the block

## Code to check intermediate values and types
- `console.log()`
- `console.clear()`
- `console.log(typeof ...)`
  - 6 primitive data types:
    - Boolean, Null, Undefined, Number, String, and Symbol
  - 1 mutatable data:
    - object

## Common errors
- misspelling, miscapitalization...
- unclosed brackets
- mixed usage of single and double quotes
- assignment operator & equality operator
- missing parenthesis after a function call
- arguments passed in the wrong order
- off by one errors (OBOE) for indexing
