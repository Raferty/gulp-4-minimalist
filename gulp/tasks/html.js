// Name: html
// Description: minimize html for production
// Dependencies: npm install --save-dev gulp-plumber gulp-mode gulp-htmlmin gulp-file-include

var config      = require('../config'),
    fileinclude = require('gulp-file-include'),
    mode        = require('gulp-mode')()
;

module.exports = function(gulp, plugins) {
    return function html() {

        return gulp.src(config.html.src)
            .pipe(plugins.plumber())
            .pipe(fileinclude(config.html.fileinclude.options))
            .pipe(mode.production(plugins.htmlmin(config.html.htmlmin.options)))
            .pipe(gulp.dest(config.html.dist));

    }
}