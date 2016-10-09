var SMTPServer = require('smtp-server').SMTPServer;

function server (options) {
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

    server.listen(options.port, options.address, function () {
        console.log(options.message || '' +
            'Server is listening on ' +
                options.address + ':' +
                options.port)
    })

    server.on('error', function (err) {
        console.log('server error:', err)
    })

    return { server: server }
}

module.exports = server
