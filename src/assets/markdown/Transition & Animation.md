# Transition & Animation

X-enter: 1st frame of enter animation
X-enter-active: 2nd frame to the frame when element appears
X-leave: 1st frame of leave animation
X-leave-active: 2nd frame to the frame when element disappears

if no name defined, it will be v-enter, v-enter-active ...

## Transition

```html
<transition name="fade">
</transition>
```
```css
.fade-enter{}
.fade-enter-active{
  transition: opacity 1s;
}
.fade-leave{}
.fade-leave-active{
  transition: opacity 1s;
  opacity: 0;
}
```

## Animation
```html
<transition name="slide">
</transition>
```
```css
.slide-enter{}
.slide-enter-active{
  animation: slide-in 1s ease-out forwards;
}
.slide-leave{}
.slide-leave-active{
  animation: slide-out 1s ease-out forwards;
}
@keyframe slide-in{
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0px);
  }
}
@keyframe slide-out{
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(20px);
  }
}
```

## Mix Transition and Animation
```html
<transition name="slide">
</transition>
```
```css
.slide-enter{
  opacity: 0;
}
.slide-enter-active{
  animation: slide-in 1s ease-out forwards;
  transition: opacity .5s;
}
.slide-leave{}
.slide-leave-active{
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
}
```
### NOTE
```html
<transition name="slide" type="transition">
</transition>
```
type could be "transition" or "animation"
Vue.js will remove the classes once css transition is done if set to "transition"

## Initial Animation
```html
<transition name="slide" appear>
</transition>
```
