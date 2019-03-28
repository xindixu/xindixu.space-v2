# Concepts 1

## Single Page Apps
### Pros & Cons
**Pros**
- feels faster, no need to wait for client-server communication 
- server consumes less resources 
- ideal for mobile app on top 
- easy to transform to Progressive Web Apps (local caching and offline expreience)
- great for working in teams: split the backend & frontend 

**Cons**
- not good for SEO
- pay attention to possible memory leaks
- rely on JS:
  - depends on power of device
  - visitor might just disable it

## Overriding the navigation 
History API

## Declarative
React is declarative approach to building UIs
Comparing to HTML, react took building UI a lot more declaratively:
- build web interface without even touching DOM
- have an even system without having interact with the actual DOM events

opposite **Iterative**
jQuery: looking up elements in DOM using jQuery or DOM events
React: tell the browser what we need, and never have to interact with DOM 

## Immutability
a variable is immutable when its value cannot be chagned after it's created 
`state` property should not be changed directly, but through `setState()`
redux: through `reducers`, which are functions

**Why**
- mutations can be centralized -> easy debugging 
- looks cleaner and simpler to understand
- **predictablity**: function will not change the value without you knowing
- **performance**: JS is quicker in swapping old reference with new than mutating an exsiting object

## Purity 
**Pure function**: function doesn't mutate object but just returns a new object 
- should not cause side effects
- should return the same output when called multiple times with the same input

**All Functional Components are Pure Components**
**Class Components can be pure is their output only depends on the props**
```jsx
class Button extends React.Component {
  render(){
    return <button>{this.props.msg}</button>
  }
}
```

## Composition
composition: build more complex functionality by combining small and focused functions
```js
const list = ['Apple','Bee','Cake']
list.map(item => item[0]).filter(item => item === 'A') // ['A']
```

### Create speicalized version of a component
```jsx
const Button = props => {
  return <button>{props.text}</button>
}
const SubmitButton = props => {
  return <Button text="Submit" />
}
const LoginButton = props => {
  return <Button text="Login" />
}
```

### Pass methods as props

```jsx
const Button = props => {
  return <button onClick={props.onClickHandler}>{props.text}</button>
}
const SubmitButton = props => {
  return <Button text="Submit"/>
}
const LoginButton = props => {
  return <Button text="Login"  onClickHandler="props.onClickHandler"/>
}

const Container = () =>{
  const onClickHandler = () =>{
    alert('clicked')
  }
  return <LoginButton onClickHandler={onClickHandler}/>
}
```

### Using Children
```jsx
const Sidebar = props => {
  return <aside>{props.children}</aside>
}

const Link = props => {
  return <a href="xx">{props.title}</a>
}

<Sidebar>
  <Link title="first list"/>
</Sidebar>
```

### Higher order components
when a component receives a component as a prop and returns a component, it's called higher order component


