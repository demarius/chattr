var SMTPServer = require('smtp-server').SMTPServer;

function server (port, address) {
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

    server.listen(port, address, function () {
        if (arguments.length) {
            console.log(arguments)
        }
    })

    server.on('error', function (err) {
        console.log('server error:', err)
    })

    return { server: server }
}

Module.exports = server
