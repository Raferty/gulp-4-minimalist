// Name: styles
// Description: lint css, concat all css, add autoprefixes, add sourcemaps, rename, minify for production
// Dependencies: npm install --save-dev gulp-mode node-sass gulp-sass gulp-sourcemaps gulp-concat gulp-cssnano gulp-autoprefixer gulp-rename 
// stylelint gulp-stylelint stylelint-scss stylelint-config-standard stylelint-config-standard-scss

const config    = require('../config.js'),
      stylelint = require('gulp-stylelint'),
      mode      = require('gulp-mode')()
;

module.exports = function(gulp, plugins) {
    return function styles() {

        return gulp.src(config.styles.src)
            .pipe(plugins.plumber())
            .pipe(stylelint(config.styles.stylelint.options))
            .pipe(mode.development(plugins.sourcemaps.init()))
            .pipe(plugins.sass(config.styles.sass.options))
            .pipe(plugins.concat('style.css'))
            .pipe(mode.production(
                plugins.cssnano(config.styles.cssnano.options)
             ))
            .pipe(plugins.autoprefixer(config.autoprefixer.options))
            .pipe(plugins.rename(config.rename.min))
            .pipe(mode.development(plugins.sourcemaps.write('.')))
            .pipe(gulp.dest(config.styles.dist))
            
    }
}