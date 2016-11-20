var express = require('express')
var app = express()
var Dispatcher = require('inlet/dispatcher')

function serverAPI (key) {
    this._key = key
}

serverAPI.prototype.dispatcher = function (options) {
    var dispatcher = new Dispatcher(this)
    return dispatcher.createDispatcher()
}

