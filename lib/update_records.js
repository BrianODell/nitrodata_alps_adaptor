"use strict"

var Promise = require('bluebird'),
    request = require('superagent'),
    join = require('url-join'),
    _ = require('lodash'),
    connector = require('./connector');


function update(instanceReqs, models, cb) {
    connector.updateInstance(instanceReqs, models, cb);
}

module.exports = update;
