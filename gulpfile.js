'use strict';

const gulp    = require('gulp'),
      config  = require('./gulp/config'),
      mode    = require('gulp-mode')(),
      plugins = require('gulp-load-plugins')()
    ;

// Function to get all tasks from ./gulp/tasks
function getTask(task) {
    return require('./gulp/tasks/' + task)(gulp, plugins);
}

// Gulp Tasks
const html       = getTask('html');
const clean      = getTask('clean');
const styles     = getTask('styles');
const scripts    = getTask('scripts');
const vendorsCss = getTask('vendors-css');
const vendorsJs  = getTask('vendors-js');
const images     = getTask('images');
const fonts      = getTask('fonts');
const sync       = getTask('browsersync');

module.exports.default = gulp.series(
    gulp.parallel(images, styles, scripts, vendorsJs, vendorsCss, html),
    sync
);

module.exports.build = gulp.series(
    clean,
    gulp.parallel(fonts, images, styles, scripts, vendorsJs, vendorsCss, html),
);