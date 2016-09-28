var SMTPServer = require('smtp-server').SMTPServer;

var server = new SMTPServer({
    hideSTARTTLS: true,
    onConnect: function (session, callback) {
        console.log(session)
        callback()
    },
    authOptional: true,
    onAuth: function (auth, session, callback) {
        callback(null, {
            user: auth.username
        })
    }
})

server.listen(6425, '127.0.0.1', function () {
    if (arguments.length) {
        console.log(arguments)
    }
})

server.on('error', function (err) {
    console.log('server error:', err)
})
