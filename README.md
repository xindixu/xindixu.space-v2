# [XindiXu.space](http://xindixu.space)
![version][version-badge]

**[xindixu.space](http://xindixu.space)** is a personal website for Xindi Xu.

# Plugins
- [Now UI Kit](https://demos.creative-tim.com/now-ui-kit/index.html)
- [Element.UI](https://element.eleme.io/)
- [Bootstrap](https://getbootstrap.com/)
- [Animated.css](https://daneden.github.io/animate.css/) (Animation effects)
- [VueAnalytics](https://matteogabriele.gitbooks.io/vue-analytics/content/) (Google Analytics)
- [VueResource](https://github.com/pagekit/vue-resource) (HTTP requests)
- [VueShowdown](https://vue-showdown.js.org/) (Markdown live editor)
- [Swiper](https://idangero.us/swiper/)

# File Structure
```
|-- public
        |-- audio
        |-- html
        |-- img
        |-- index.html
        |-- manifest.json
        |-- robots.txt
        |-- favicon.ico

|-- src
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
        |-- App.vue
        |-- main.js
        |-- router.js
        |-- registerServiceWorker.js

|-- util
        |-- Font-spider


|-- server.js
|-- vue.config.js
|-- .eslintrc.js
|-- .postcssrc.js
|-- babel.config.js

```

# Design
[link to other folder]
# `Package.json`
### `dependencies`
### `devDependencies`
[babel-plugin-component](https://github.com/ElementUI/babel-plugin-component)

Converts
```js
import { Button } from 'components'
```

to

```js
var button = require('components/lib/button')
require('components/lib/button/style.css')
```

# Performance Improvement
## Removing Unused Code
### Uncss
### Packages

## Minify
### Font
**Chinese Font Minifier**: [font-spider](https://blog.csdn.net/qq_33744228/article/details/80613496)

**How to use**
1. Copy all Chinese type needed for the website and paste into corresponding html files
2. Put the original font file to the directory
3. Use css `@font-face` to load font file
*Must use .tff format*
```css
 @font-face {
    font-family: 'SentyTEA';
    src: url('./SentyTEA.ttf#font-spider') format('truetype');
    font-weight: normal;
    font-style: normal;
}
```
4. Run `$ font-spider ./filename.html`

## Code Splitting
## Image Loading Technique
# Progressive Web App
# Accessibility
# SEO



# Heroku Deployment
# Google Analytics
[version-badge]: https://img.shields.io/badge/version-3.0-blue.svg
