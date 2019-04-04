// const express = require('express');
// const port = process.env.PORT || 8080;
// const app = express();
//
// app.use(express.static(__dirname + '/dist/'));
// app.get(/.*/, function(req, res) {
//   res.sendfile(__dirname + '/dist/index.html');
// });
// app.listen(port);
// console.log('serve started');

const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 80;
app.listen(port);
