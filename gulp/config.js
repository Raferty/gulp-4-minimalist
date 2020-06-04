// config

module.exports = {
// ------------------------------------------------- autoprefixer
    autoprefixer: {
        options: {
            overrideBrowserslist: ['last 3 versions']
        }
    },
// ------------------------------------------------- babel
    babel: {
        options: {
            presets: ['@babel/env']
        }
    },
// ------------------------------------------------- html
    html: {
        src: ['./src/html/**/*.html', '!src/html/components/**/*'],

        // https://github.com/kangax/html-minifier
        htmlmin: {
            options: {
                collapseWhitespace: true,
                removeComments: true
            }
        },
        fileinclude: {
            options: {
                prefix: '@@',
                basepath: '@file'
            }
        },
        dist: './dist/'
    },
// ------------------------------------------------- styles
    styles: {
        src: ['./src/scss/**/*.scss', '!src/scss/mixin/**/*', '!src/scss/utils/**/*'],
        dist: './dist/css/',
        sass: {
            options: {
                outputStyle: 'expanded'
            }
        },
        cssnano: {
            options: {
                safe: true,
                minifyFontValues: { removeQuotes: false }
            }
        },
        stylelint: {
            options: {
                failAfterError: false,
                reporters: [{
                    formatter: 'string',
                    console: true
                }]
            }
        }
    },
// ------------------------------------------------- scripts
    scripts: {
        src: './src/scripts/**/*.js',
        dist: './dist/js/'
    },
// ------------------------------------------------- images
    images: {
        src: './src/images/**/*.{jpg,png,gif,svg}',
        dist: './dist/images/',

        // https://www.npmjs.com/package/imagemin-mozjpeg
        imageminMozjpeg: {
            options: {
                quality: 80
            }
        },
        gifsicle: {
            options: {
                interlaced: true
            }
        },
        // https://www.npmjs.com/package/pngquant
        svgo: {
            options: {
                plugins: [{removeViewBox: false}]
            }
        }
    },
// ------------------------------------------------- fonts
    fonts: {
        src: './src/fonts/**/*.ttf',
        dist: './dist/fonts/'
    },
// ------------------------------------------------- clean
    clean: {
        folders: [
            './dist/'
        ]
    },
// ------------------------------------------------- browsersync
    browsersync: {
        options: {
            server: './dist/'
        },
        watch: [
            './src/scss/**/*.scss',
            './src/js/**/*.js',
            './src/**/*.html'
        ]
    },
// ------------------------------------------------- rename
    rename: {
        min: {
            suffix: '.min' 
        }
    },
// ------------------------------------------------- vendor
    vendor: {
        css: {
            npmDist: {
                excludes: [
                    '*.js',
                ]
            },
            dist: './dist/css/libs'
        },
        js: {
            npmDist: {
                excludes: [
                    '*.css',
                    '*.scss'
                ]
            },
            dist: './dist/js/libs'
        }
    }
}