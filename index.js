var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var port = 3003
var version = '/api/v1/'
var moment = require('moment')
var logger = require('morgan')
var fs = require('fs')
var path = require('path')

var http = require('http')
var server = http.createServer(app)
var io = require('socket.io')(server)


var mm = moment()
var date = mm.utc(7).format('DD-MM-YYYY')
var time = mm.utc(7).format('HH: mm: ss')
console.log(date, time)



app.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb'
}));
app.use(bodyParser.json({
  limit: '50mb'
}));



app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization, X-Access-Token')
  res.setHeader('Access-Control-Allow-Credentials', true)

  // Pass to next layer of middleware
  next()
});

app.use(logger('dev'))
var accessLogStream = fs.createWriteStream(path.join(__dirname, `logs`, `'${date}'.log`), { flags: 'a' })
var configlog = `[:date[iso]] [ip]: :remote-addr :remote-user [method]: :method [url]: :url HTTP/:http-version [status]: :status [response-time]: :response-time ms [client]: :user-agent`
app.use(logger(configlog, {
  stream: accessLogStream
}))

const item = require('./route/item')


app.use(version+'item',(item))




app.listen(port, function () {
  console.log('Example app listening on port ' + port)
})

// app.io.listen(server)