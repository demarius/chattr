var express = require('express')
var app = express()
var Dispatcher = require('inlet/dispatcher')

function serverAPI (key) {
    this._key = key
}

serverAPI.prototype.dispatcher = function (options) {
    var dispatcher = new Dispatcher(this)
    dispatcher.dispatch('GET /', 'index')
    return dispatcher.createDispatcher()
}

serverAPI.prototype.index = function () {
    return 'Index'
}
