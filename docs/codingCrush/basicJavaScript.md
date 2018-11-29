---
layout: Post
title: Basic Javascript
lang: en-US
---
# Basic Javascript
### Array
.pop() .push()
.shift() .unshift()

### Scope
``` javascript
var a;          //global
function foo(){
  var b;        //local
  c;            //global
}

```
- Strict mode
'use strict';

### Comparison
``` javascript
1 == "1" //true => equality
1 === "1" //false => strick equality

1 !== 1 //false
1 !== "1" //true

typeof 3 // returns "number"
typeof "3" // returns "string"
```

### Objects
``` javascript
var anotherObject = {
  make: "Ford", // 'make'
  5: "five",
  "model": "focus"
};
```
- naming
  `"name" / 'name' / name`
  `5`
  `"my name"`
- access

  - dot notation
    `obj.name`
    `obj.5`
    - string (only alphabets / _ / $)
    - can't start with number
    - can't take in variable
    -
  - bracket notation
    `obj["my name"]`
    inside bracket:
    - string
    - space
    -
    - a variable that resolves to a string
    i.e function parameters

- change property value
- add property
  `obj["sound"] = "meow";`
  add property "sound", with value "meow"
- delete property
  `delete obj.tail;`
  delete the property tail
- check if property exist
  `.hasOwnProperty(propname)`
  return `true` or `false`

### Loop
- for()
- while()
  - don't execute if condition is not met
- do{...}while(...)
  - execute at least once

### Random
Math.random();
//return 0 <= x < 1

Math.floor(Math.random() * (a+1))
// return 0 <= int x <= a

Math.floor(Math.random() * (max - min + 1)) + min;
// return

### Parse String to ...
parseInt(str); //takes in a str and return a int
parseInt(str, radix); //radix = 2, 8, 10, 16

Note:
- If the radix parameter is omitted, JavaScript assumes the following:
  - If the string begins with "0x", the radix is 16 (hexadecimal)
  - If the string begins with "0", the radix is 8 (octal). This feature is deprecated
  - If the string begins with any other value, the radix is 10 (decimal)

- Only the first number in the string is returned!
- Leading and trailing spaces are allowed.
- If the first character cannot be converted to a number, parseInt() returns NaN.

### Ternary Operator
condition ? statement 1 : statement2

condition1 ? statement 1 : condition2 ? statement2 : statement 3

if(condition1){
  return statement1;
}
else if(condition2){
  return statement2;
}
else{
  return statement3;
}
