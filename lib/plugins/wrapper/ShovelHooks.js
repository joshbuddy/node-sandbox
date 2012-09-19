var BaseShovelHooks = require("../_base/ShovelHooks");
var util = require("util");
var wrapperFactory = require("../../wrapperFactory");

var ShovelHooks = module.exports = function(options, parentObject, pluginManager){
    BaseShovelHooks.apply(this, arguments);
}

util.inherits(ShovelHooks, BaseShovelHooks);

ShovelHooks.prototype.onAfterLoad = function(){
    //seal off process.binding() and require() before running any code
    global.process.binding = wrapperFactory.processBinding(global.process.binding, this._startData.permissions);
    //global.require = wrapperFactory.require(global.require, this._startData.permissions);
}