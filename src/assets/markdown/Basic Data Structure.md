# Basic Data Structure

### Array
- one dimensional array 
- multi-dimensional array 
- mix type
  - array in js can have a mix of types
- index starts from 0


- add items with push(), unshift()
  - `arr.push(1,2,3); // add 1,2,3 to the end of arr`
  - `arr.unshift(1,2,3); // add 1,2,3 to the beginning of arr`
- remove items with pop(), shift()
- remove items with splice();
  - `splice(index,numToDelete)`
- add items with splice()
  - `splice(index,numToDelete,itemToAdd)`
- copy array item with slice()
  - `slice(start,end); //[start,end-1]`
- copy an array with spread operator
  - `let thatArr = [...thisArr]`
- combine arr with spread operator 
  - `let sentence = ['this','is', ...fragement, 'great']`
- check for presents with indexOf()


### Objects
- hasOwnProperty()
```javascript
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
 return (users.hasOwnProperty('Alan','Jeff','Sarah','Ryan')) ? true : false;
}

console.log(isEveryoneHere(users));
```
- for...in...
`for(let user in users){}`
this is only works for objects because objects do not maintain an order

- `Object.key(obj)` to generate an array of all object keys