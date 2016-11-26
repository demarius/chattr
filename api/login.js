var cadence = require('cadence')
var Dispatcher = require('inlet/dispatcher')
var express = require('express')
var app = express()

function serverAPI (key) {
    this._key = key
}

serverAPI.prototype.dispatcher = function (options) {
    var dispatcher = new Dispatcher(this)
    dispatcher.dispatch('GET /', 'index')
    return dispatcher.createDispatcher()
}

serverAPI.prototype.index = cadence(function () {
    return 'Index'
})
