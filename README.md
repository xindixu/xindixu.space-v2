# [XindiXu.space](http://xindixu.space)
![version][version-badge]

**[xindixu.space](http://xindixu.space)** is a personal website for Xindi Xu.

## Plugins
- Now UI Kit
- Element.UI
- Bootstrap
- Animated.css (Animation effects)
- VueAnalytics (Google Analytics)
- VueResource (HTTP requests)
- VueShowdown (Markdown live editor)
- Swiper

## File Structure
```
xindixu.space
|-- public
        |-- audio
        |-- html
        |-- img
        |-- index.html
|-- src
        |-- App.vue
        |-- main.js
        |-- router.js
        |-- assets
        |   |-- fonts
        |   |-- scss
        |   |-- css
        |   |-- html
        |   |-- markdown
        |   |-- svg
        |   |-- json
        |-- components
        |-- directives
        |-- layout
        |   |-- AppFooter.vue
        |   |-- AppNavbar.vue
        |-- pages
        |   |-- About.vue
        |   |-- Blog.vue
        |   |-- Casper.vue
        |   |-- Home.vue
        |   |-- Work.vue
        |   |-- WorkDetail.vue
        |-- plugins
```

## Design

## `Package.json`
### `dependencies`
### `devDependencies`
babel-plugin-component: https://github.com/ElementUI/babel-plugin-component
Converts
```js
import { Button } from 'components'
```

to

```js
var button = require('components/lib/button')
require('components/lib/button/style.css')
```

## Performance Improvement
### Removing Unused Code
#### Uncss
#### Packages

### Code Splitting
### Image Loading Technique
### Progressive Web App

## Heroku Deployment
## Google Analytics
[version-badge]: https://img.shields.io/badge/version-3.0-blue.svg
