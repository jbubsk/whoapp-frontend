module.exports = function (gulp) {
    var sass = require('gulp-sass'),
        minifyCss = require('gulp-minify-css'),
        rename = require('gulp-rename'),
        path = require('./path')();

    gulp.task('sass', function (done) {
        gulp.src(path.css + '/style.scss')
            .pipe(sass())
            .pipe(gulp.dest(path.css))
            /*.pipe(minifyCss({
                keepSpecialComments: 0
            }))
            .pipe(rename({extname: '.min.css'}))
            .pipe(gulp.dest(path.css))*/
            .on('end', done);
    });
};