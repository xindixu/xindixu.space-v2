# JSX

## Primer
dash -> camelCase for attributes


`render()` function can only return a single node

## Transpiling JSX
Plain JS
```js
ReactDOM.render(
  React.DOM.div(
    {id:'test'},
    React.DOM.h1(null, 'A header'),
    React.DOM.p(null, 'A paragraph')
  ),
  document.getElementById('root')
)
```
Babel help us to transpile it 

## JS in JSX
use {}

## HTML in JSX
resembles HTML, but it is XML

### Close all tags 
`<br />` instead of `<br>`

### CamelCase
`onchange` -> `onChange`
`onclick` -> `onClick`

### `class` become `className`

`class` -> `className`
`for` -> `htmlFor`

### no more inline styles with string

### forms

## CSS in React
