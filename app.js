import { main_router } from './router/main_router.js'
// var http = require('http');
// const { hostname } = require('os');
// var page_content = require('./page_content');
import express from "express";
const app = express()

// app.use(function (req, res, next) {

//   // Website you wish to allow to connect
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

//   // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//   // Request headers you wish to allow
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader('Access-Control-Allow-Credentials', true);

//   // Pass to next layer of middleware
//   next();
// });

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/main', main_router)

// const app = http.createServer(function (req, res) {
//   handler = router.route(req);
//   handler.process(req, res);
//   // res.writeHead(200, {'Content-Type': 'text/plain'});
//   // res.write("The date and time are currently: " + page_content.myDateTime());
//   // res.end('Hello World!');
// })


app.listen(3001);

