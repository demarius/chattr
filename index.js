var Server = require('./server/smtp.js')
var Client = require('./client/')

var app = Server({ port: 6425, address: '127.0.0.1' })

Client({ port: 6425, address: '127.0.0.1' }, function (error, client) {
    app.onConnect = function (session, callback) {
        //try overriding connect here
    }
})
