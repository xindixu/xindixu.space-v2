# Regular Expression

### Test method
`reg.test(str)`
```javascript
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
// Returns true
```
### Match method
`string.match(reg)` return the matches found 

- Return the first match
```javascript
"Hello, World!".match(/Hello/);
// Returns ["Hello"]
```

- More than first match 
g flag
```javascript
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
// Returns ["Repeat", "Repeat", "Repeat"]
```

### Replace method
`.replace(regexToMatch,strToReplace)`
- refer to capture group with $1 $2..
```javascript
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
// Returns "Camp Code"
```
- example:
remove whitespace from start and end 
```javascript
let hello = "   Hello, World!  ";
let wsRegex = /^\s+(.*?)\s+$/; 
let result = hello.replace(wsRegex,'$1'); 
```


### Match literal strings 
- Strict
`/Hello/` matches `"Hello"` only
- Different possibilites
`/Hello|hello/`
- Ignore case
`/ignorecase/i`
i flag to ignore cases

### Match anything with wildcard period
`/.un/` matches `run pun gun mun bun ...`

### Match alphabets & numbers
- **chracter classes**
definde a group of characters that wish to match by placing them in side `[ ]`
`/b[aiu]g/` matches `bag big bug` but not `bog beg ...`
- **character sets**
create a set with `-`
`/[a-e]/` matches `a,b,c,d,e`
`/[a-z0-9]/` mathces all lowercase letters and numbers
- **Negated character sets**
create a set of characters that wish not to match by adding `^` after `[` before characters do not wish to match
`/[^aeiou]/gi` matches all characters that are not a vowel. no

### Match occurance 
- one or more times `+`
```javascript
let regex = /a+/g
"abc".match(regex); //["a"]
"aabc".match(regex); //["aa"]
"abac".match(regex); //["a","a"]
```
- zero or more times `*`
```javascript
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
```

- zero or one `?`
```javascript
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american); // Returns true
rainbowRegex.test(british); // Returns true
```

### Lazy matching 
- ` greedy` match by default
finds the longest possible part of a string that fits the regex pattern 
- `lazy` match with `?`
finds the smallest possible part of the string 

```javascript
// greedy match
"titanic".match(/t[a-z]*i/); // return ["tatani"]

// lazy match
"titanic".match(/t[a-z]*?i/); // return ["ti"]
let tagFinder = /<.*?>/; // return <h1> tag
let tagTextFinder = /<.*>/; // return <h1>Hello World</h1> tag
```
### Match at position 
- at beginning `/^apple/`
```javascript
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
// Returns true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
// Returns false
```
- at ending `/apple$/`

### Shorthand character classes
- alphanumerics / letters and numbers 
`\w` = `[A-Za-z0-9_]`
- everything but letters and numbers 
`\W` = `[^A-Za-z0-9]` opposite of `\w`
- only numbers 
`\d`
- all non-numbers
`\D`

### Match other characters
- whitespace, carraige return, tab, form feed, and new line
`\s` = `[\r\t\f\n\v]`
- non-whitespace characters
`\S` = `[^\r\t\f\n\v]`

### Specify number of matches - **Quantity sepcifiers**
- lower and upper number
`/a{3,5}h/` matches `"aaah", "aaaah", "aaaaah"` 
- only lower number
`/a{3,}h/` matches `"aaah", "aaaah" ...`
- only upper number 
`/a{,3}h/` matches `.., "aah", "aaah"`
- exact number 
`/a{3}h` matches `"aaah"`

### Lookahead
`lookahead` is used when you want to search for multiple patterns over the same string 
- postive lookahead
make sure the element in the search pattern is there, but won't match it
`(?=...)` `...` the required part that is not matched 
- negative lookahead
make sure the element in the search pattern is not there
`(?!...)` `...` the pattern you don't want to be there
the rest of the pattern is returned if negative lookahead part is not present 

```javascript
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/; // make sure u is there, but will not return u
let qRegex = /q(?!u)/; // make sure there is not u
quit.match(quRegex); // Returns ["q"]
noquit.match(qRegex); // Returns ["q"]
```

### Reuse patterns using capture groups
capture group - inside `( )`
refer to capture group - `\1 \2 \3 ..`
```javascript
let repeatNum = "42 42 42";
let reRegex = ^(\d+)(\s)\1\2\1$; 
// ^ $ - start with and end with 
// ( ) - capture group
// \1 - to first capture grou
// \2 - second captrue group
let result = reRegex.test(repeatNum);
```

