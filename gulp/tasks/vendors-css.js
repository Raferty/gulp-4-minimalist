// Name: vendors css
// Description: babel, concat all scripts, add sourcemaps, rename, uglify for production
// Dependencies: npm install --save-dev gulp-mode gulp-sourcemaps gulp-babel @babel/core @babel/preset-env gulp-concat gulp-uglify gulp-rename

const config  = require('../config.js'),
      npmDist = require('gulp-npm-dist')
;

module.exports = function(gulp, plugins) {
    return function vendorsCss() {
        
        return gulp.src(npmDist(config.vendor.css.npmDist), {base:'./node_modules'})
            .pipe(plugins.rename(function(path) {
                path.dirname = path.dirname.replace(/\/dist/, '').replace(/\\dist/, '');
            }))
            .pipe(gulp.dest(config.vendor.css.dist));

    }
}