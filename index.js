var SmtpClient = require('emailjs-smtp-client')

var initiated = false,
    client = new SmtpClient('127.0.0.1', 6425, {
        ignoreTLS: true
    })

client.onidle = function () {
    if (!initiated) {
        initiated = true
        console.log('client idle')
        client.useEnvelope({
            from: "testAddress@home.com",
            to: ["testAddress@work.com"]
        })
    }
}

client.onready = function (failed) {
    if (failed.length) {
        console.log('failed to connect to ', failed)
    }
}

client.onerror = function (err) {
    console.log('client error: ', err)
}

client.connect()
