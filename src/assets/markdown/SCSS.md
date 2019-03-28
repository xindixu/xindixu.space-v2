# SCSS

### Basics
$val - variable starts with $
reusable throughout the file

### Mixin 
declare: @mixin
use: @include
```scss
@mixin box-shadow($x, $y, $blur, $c){ 
  -webkit-box-shadow: $x, $y, $blur, $c;
  -moz-box-shadow: $x, $y, $blur, $c;
  -ms-box-shadow: $x, $y, $blur, $c;
  box-shadow: $x, $y, $blur, $c;
}

#awesome{
  @include box-shadow(0px,0px,4px,#fff);
}
```

### @if @else
```scss
@mixin border-stroke($val){
    @if $val == light {
      border: 1px solid black;
    }
    @else if $val == medium{
      border: 3px solid black;
    }
    @else if $val == heavy{
      border: 6px solid black;
    }
    @else{
      border: none;
    }
  }
  
  #box {
    width: 150px;
    height: 150px;
    background-color: red;
    @include border-stroke(medium);
```
### #{$x} convert to string
`#{$i}` converts to string

### @for
`@for $i from 1 through 12{} \\[1,12]` 
`@for $i from 1 to 12{} \\[1,11]` 

```scss
@for $i from 1 through 12 {
  .col-#{$i} { width: 100%/12 * $i; }
}
```
converts to 
```css
.col-1 {
  width: 8.33333%;
}

.col-2 {
  width: 16.66667%;
}

...

.col-12 {
  width: 100%;
}
```
### @while
```scss
$x: 1;
@while $x < 13 {
  .col-#{$x} { width: 100%/12 * $x;}
  $x: $x + 1;
}
```


### @each to map over items in a list
```scss
@each $color in blue, red, green {
  .#{$color}-text {color: $color;}
}

//or 
```

```scss
$colors: (color1:blue, color2:red, color3:green);
@each $key, $color in $colors {
  .#{$colors}-text {
    color: $color;
  }
}
```
$key must present, otherwise $color will be referencing color1, color2, ... instead of blue, red, ...

### Partials
name for partials starts with _
a small segment of css and not to convert it into a css file
also, can be used to scss
@import to import scss
after import, all variables, mixins, and codes are available for use
```scss
// In the main.scss file, import _mixins.scss
@import 'mixins'
```

### @extend
borrow the css rules from one element and build upon them in another 

```scss
.panel{
  background-color: red;
  height: 70px;
  border: 2px solid green;
}

.big-panel{
  @extend .panel;
  width: 150px;
  font-size: 2em;
}
```


