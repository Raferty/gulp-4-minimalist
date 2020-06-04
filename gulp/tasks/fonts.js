// Name: html
// Description: create woff and woff2 font types
// Dependencies: npm install --save-dev gulp-ttf2woff2 gulp-ttf2woff

var config = require('../config.js');

module.exports = function(gulp, plugins) {
    return function fonts() {
        
        var stream =

        gulp.src(config.fonts.src)
            .pipe(plugins.ttf2woff())
            .pipe(gulp.dest(config.fonts.dist));

        gulp.src(config.fonts.src)
            .pipe(plugins.ttf2woff2())
            .pipe(gulp.dest(config.fonts.dist));
        
        return stream;
        
    }
}