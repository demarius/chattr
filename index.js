var server = require('./server/smtp.js')

var app = server({ port: 6425, address: '127.0.0.1' })
