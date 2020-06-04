// Name: scripts
// Description: babel, concat all scripts, add sourcemaps, rename, uglify for production
// Dependencies: npm install --save-dev gulp-mode gulp-sourcemaps gulp-babel @babel/core @babel/preset-env gulp-concat gulp-uglify gulp-rename 
// gulp-eslint eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node

var config = require('../config.js'),
    mode   = require('gulp-mode')()
;

module.exports = function(gulp, plugins) {
    return function scripts() {
        
        return gulp.src(config.scripts.src)
            .pipe(plugins.plumber())
            .pipe(plugins.eslint())
            .pipe(plugins.eslint.format())
            .pipe(mode.development(plugins.sourcemaps.init()))
            .pipe(plugins.babel(config.babel.options))
            .pipe(plugins.concat('common.js'))
            .pipe(mode.production(plugins.uglify()))
            .pipe(plugins.rename(config.rename.min))
            .pipe(mode.development(plugins.sourcemaps.write('.')))
            .pipe(gulp.dest(config.scripts.dist));

    }
}