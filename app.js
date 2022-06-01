import { main_router } from './router/main_router.js'
// var http = require('http');
// const { hostname } = require('os');
// var page_content = require('./page_content');
import express from "express";
const app = express()



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

