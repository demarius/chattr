var SmtpClient = require('emailjs-smtp-client')

function client (smtp, from, to, callback) {
    var initiated = false,
        client = new SmtpClient('127.0.0.1', 6425, {
            ignoreTLS: true
        })

    client.onidle = function () {
        if (!initiated) {
            initiated = true
            console.log('client idle')
            client.useEnvelope({
                from: from,
                to: [ to ]
            })
        }
    }

    client.onready = function (failed) {
        if (failed.length) {
            console.log('failed to connect to ', failed)
            callback(failed)
        } else {
            console.log('client ready')
            callback(null, client)
        }
    }

    client.onerror = function (err) {
        console.log('client error: ', err)
    }

    client.connect()
}

module.exports = client
