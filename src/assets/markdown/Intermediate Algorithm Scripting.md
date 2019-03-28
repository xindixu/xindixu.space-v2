# Intermediate Algorithm Scripting 
## Different Two Arrays
```js
function diffArray(arr1, arr2) {
  var newArr = [];

  // Same, same; but different.
  newArr = [...diff(arr1,arr2), ...diff(arr2,arr1)];

  function diff(arr1, arr2){
    return arr1.filter((item) => arr2.indexOf(item) == -1);
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```

## wherefore-art-thou
``` js
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  let equal = true;
  for(let obj of collection){
    for(let key in source){
      if(obj.hasOwnProperty(key)){
        if(obj[key] == source[key]){
          // key, value equal source
        }
        else{
          equal = false;
          break;
        }
      }
      else{
        equal = false;
        break;
      }
    }
    if(equal){
      arr.push(obj);
    }
    equal = true;
  }
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
```
1. `for(let obj of collection)` to get the property(obj) out of the array 
2.  `for(let obj in collection)` to get the key(index) out of the array

``` js
function whatIsInAName(collection, source) {

// What's in a name?
var arr = [];
// Only change code below this line
var srcKeys = Object.keys(source);

return collection.filter((obj) => {
  return srcKeys
                .map((key) => {
                  return (obj.hasOwnProperty(key) && obj\[key\] == source\[key\]) ? true : false
                })
                .reduce((a,b) => {
                  return a && b;
                })
})
```
1. filter() to filter through all objects in an array, return the obj if it pass the test (true)
2. map() to map the key with true/false (if obj has the key and same value for the key)
3. reduce() to reduce multiple value to one value 

## Pig latin
```js
function isVowel(char) {
  let result = /^[aeiou]/.test(char);
  return result;
}

function translatePigLatin(str) {

  if (isVowel(str.charAt(0))) {
    return str + 'way';
  }
  
  let index = 0;
  while (index < str.length) {
    if(isVowel(str.charAt(index))){
      break;
    }
    else{
      index ++;
    }
  }
    return str.substring(index,str.length) + str.substring(0,index) + 'ay';

}
console.log(translatePigLatin("sssb"));
```