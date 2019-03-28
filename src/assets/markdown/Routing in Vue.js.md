# Routing in Vue.js


http://xindixu.space/whatever
`/whatever` the server will return the resource 'whatever' to the frontend 

http://xindixu.space/#/home
`#` prevents requesting resources from the server
so that vue.js can handle it 

to get rid of #, we need to set the serve to always return #app, regardless the url we send in 