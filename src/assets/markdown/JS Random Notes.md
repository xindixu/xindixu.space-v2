# JS Random Notes
## Set vs. Array

Set: {1,2,3}
Array: [1,2,3]

Array is type of structure representing block of data (numbers, objects, etc…) allocated in *consecutive* memory.

Set is an abstract data type which contains only *distinct* elements/objects without the need of being allocated orderly by index.

**Indexed collections** are collections of data which are ordered by an index value
**Keyed collections** are collections which use keys; these contain elements which are iterable in the order of insertion.

```js
var emptySet = new Set(); 
var exampleSet = new Set([1,2,3]);

var set = new Set([1,2,3]); // {1,2,3}
var arr = Array.from(set);//[1,2,3]
```

### Constructing
Array Set([iterable]) 
```js
let arr = []
let arr = [1,2,3]
let arr = Array.from("123")

let emptySet = new Set()
let exampleSet = new Set([1,2,3])
// but not new Set(1)
```
### Locating / Acessing an element


