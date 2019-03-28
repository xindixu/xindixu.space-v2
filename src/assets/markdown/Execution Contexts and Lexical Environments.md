# Execution Contexts and Lexical Environments 
-- Understanding the weird part of js 

# *Conceptrual Aside* - Syntax Parsers, Execution Contexts, and Lexical Environments
- syntax parser
a program that reads the code and determines what it does and if its grammer is valid
- lexical environments
where something sits physically in the code
`function foo () { var x; } var x is inside function foo()`
- execution context
a wrapper to manage which lexical environemnts it is in / which code it is working

# *Conceptrual Aside* - Name/Value Pairs and Objects
- name value pair
a name which maps to a unique value 
name maybe defined more than once, but only can have one value in any given execution context
- object
a collection of name value pairs 

# Global Environment and global object
- execution context 
execution context is created at global level
  - global object
  inside a browser - window
  - special variable - 'this'
  - outer environment 
  - your code 
**⚠ You have pasted a link referring an attachment that could not be found in the storage location of this note. Pasting links referring attachments is only supported if the source and destination location is the same storage. Please Drag&Drop the attachment instead! ⚠**
- "global": not inside a function
-  global variables and functions will attach to the global object - window

# Execution Context I - Creation and Hoisting
- creation phase 
  - global object, 'this', outer environment 
  - setup memory space for vaiables and functions - "Hoisting"
  - variable: setup memory space with placeholder "undefined"

- code execution phase 

# *Conceptual Aside* JavaScript & Undefined

```javascript
var a;
console.log(a); // undefined
console.log(b); // Uncaught ReferenceError: b is not defined
```
- undefined: value hasn't be set
a special value in js
- Uncaught ReferenceError
the variable does not exist in memory 
- although you can set a variable to `undefined`, but it is not a good practice

# Execution Context II - Execution Phase
- code will be executed line by line
 
```js
function b (){
  return 'b';
}
console.log(b); // 'b'
console.log(a); // 'undefined'
var a = 'a';
console.log(a); // 'a'
```
- creation phase
create memory for b, a; set a to undefined
- execution phase

# *Conceptual Aside* Single Threaded, Synchronous Execution

## Single Threaded
one command at a time 
browswer has a lot of stuffs running besides JS, but for JS, one command at a time 

## Synchronous
one line at a time 

# Function Invocation and the Execution Stack 

## Invocation 
run a function
in JS, by using parenthesis ()

```js
function b(){

}
function a(){
  b()
}
a()
```
1. create global execution context 
2. create execution context `a()` and execute codes in the context, i.e. "calling b()"
3. create execution context `b()` and execute codes in the context

## execution stack 
1. create global execution context 
2. create execution context `a()`
    - create a execution context and put it on top 
    - whatever is on top, that is the current execution context 
    - run it line by line 
3. create execution context `b()`
    - if it hits a function invokation, it will stop and create another execution context `b()`

## example:
```js
function a(){
  b();
  var c;
}
function b(){
  var d;
}
a();
var d;
```
stack:
b()
a()
global exeuction context

steps:
1. push global execution context
2. declare memories for a(), b(), d
3. hit a(); push execution context a()
4. execute codes in a() line by line
5. hit b(); push execution context b() 
6. execute codes in b() line by line
7. create d; 
8. done with b(); pop b()
9. create c; 
10. done with a(); pop a()

again, JS runs one line of code at a time 

# Functions, Contexts, and Varible Environments
## Variable Environments
where the variables live, and how they relate to each other in memory 


# The Scope Chain 

- reference to the outer environment - lexical environment
- lexical environments
  where something sits physically in the code
- scope chain: looking for lexcial environments one by another to see if there is the variable

```js
function b(){
  console.log(myVar); // 1
}
function a(){
  var myVar = 2;
  b();
}

var myVar = 1;
a();
```
stack:
b() 
a() - myVar = 2
global - myVar = 1

1. no myVar in b()
2. lexical environment for b() is global
3. look for myVar in global
4. found it!

```js

function a(){
  var myVar = 2;
  
  function b(){
    console.log(myVar); // 2
  }
}

var myVar = 1;
a();
```

1. no myVar in b()
2. lexical environment for b() is a()
3. look for myVar in a()
4. found it!

```js

function a(){  
  function b(){
    console.log(myVar); // 2
  }
}

var myVar = 1;
a();
```

1. no myVar in b()
2. lexical environment for b() is a()
3. look for myVar in a()
4. no myVar in a()
5. lexical environment for a() is gloabl
6. look for myVar in global 
7. found it


# Scope, ES6, and Let
## Scope 
where a variable is available in your code 
and if it's truly the same variable, or a new copy 

## let 
let will declare the variable in the block 

# Asynchronous Callback
Asynchronous: more than one at a time 

The broswer has 
- JS engine: synchronous
- Rendering engine
- HTTP request 

JS will talk to other engines 
STACK:
b()
a()
Global

EVENT QUEUE:
Click
HTTP Resquest

- after STACK gets empty, it's going to look at the EVENT QUEUE and handel the events
- only start process event after the stack is empty 

STACK:
clickHandler()

EVENT QUEUE:
HTTP Resquest