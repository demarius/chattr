require('proof')(1, prove)

function prove (assert) {
    assert(true, 'Nothing yet')

    var Server = require('../server/smtp.js')
    var Client= require('../client/')

    var server = Server({ port: 6425, address: '127.0.0.1' }).server

    Client({ port: 6425, address: '127.0.0.1' }, function (error, client) {
        if (error) throw error

        client.close()
        server.close(function () {
        })
    })
}
