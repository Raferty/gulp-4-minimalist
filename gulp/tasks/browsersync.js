// Name: sync
// Description: browser sync
// Dependencies: npm install --save-dev browser-sync

var gulp        = require('gulp'),
    plugins     = require('gulp-load-plugins')(),
    config      = require('../config.js'),
    browserSync = require('browser-sync').create()
;

// Function to get all tasks from ./gulp/tasks
function getTask(task) {
    return require('./' + task)(gulp, plugins);
}

// Gulp Tasks
const html    = getTask('html');
const styles  = getTask('styles');
const scripts = getTask('scripts');

module.exports = function(gulp, plugins) {
    return function sync() {
        
        var stream =

        browserSync.init(config.browsersync.options);

        browserSync.watch(config.html.src, gulp.series(html));
        browserSync.watch(config.styles.src, gulp.series(styles));
        browserSync.watch(config.scripts.src, gulp.series(scripts));
        browserSync.watch(config.browsersync.watch).on('change', browserSync.reload);

        return stream;

    }
}