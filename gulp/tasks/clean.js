// Name: html
// Description: clean dist folder
// Dependencies: npm install --save-dev del

var config = require('../config.js'),
    del    = require('del')
;

module.exports = function(gulp, plugins) {
    return function clean(cb) {

        return del(config.clean.folders, cb);

    }
}