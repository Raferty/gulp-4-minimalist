// Name: images
// Description: minimize images by pngquant for png, imageminMozjpeg for jpg, gifsicle for gif, svgo for svg, create webp
// Dependencies: npm install --save-dev gulp-imagemin imagemin-pngquant imagemin-mozjpeg gulp-webp

var config          = require('../config.js')
    pngquant        = require('imagemin-pngquant'),
    imageminMozjpeg = require('imagemin-mozjpeg')
;

module.exports = function(gulp, plugins) {
    return function images() {

        return gulp.src(config.images.src)
            .pipe(plugins.imagemin([
                pngquant(),
                imageminMozjpeg(config.images.imageminMozjpeg.options),

                plugins.imagemin.gifsicle(config.images.gifsicle.options),
                plugins.imagemin.svgo(config.images.svgo.options)
            ]))
            .pipe(plugins.webp())
            .pipe(gulp.dest(config.images.dist));
            
    }
}