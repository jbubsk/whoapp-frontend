var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    paths = require('../paths'),
    concat = require('gulp-concat'),
    source = require('vinyl-source-stream'),
    sass = require('gulp-sass'),
    reactify = require('reactify'),
    browserify = require('browserify');

/**** JS build ****/

gulp.task('build-js-libraries', function () {
    return gulp.src([
        paths.lib_bower + 'jquery/dist/jquery.min.js'
    ])
        .pipe(concat(paths.dest.lib))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('build-jsx', function () {
    return browserify(paths.src.app)
        .transform(reactify)
        .bundle()
        .pipe(source(paths.dest.app))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('build-js-pure', function () {
    return browserify(paths.src.buildjs)
        .bundle()
        .pipe(source(paths.dest.app))
        .pipe(gulp.dest(paths.dist));
});

/**** Styles build ****/

gulp.task('build-styles-libraries', function (done) {
    gulp.src([paths.lib_bower + 'bootstrap/dist/css/bootstrap.min.css',
        paths.lib_node + 'bootstrap/dist/css/bootstrap-theme.min.css'
    ])
        .pipe(concat(paths.dest.lib_style))
        .pipe(gulp.dest(paths.dist))
        .on('end', done);
});

gulp.task('build-styles', function (done) {
    gulp.src(paths.src.scss)
        .pipe(sass())
        .pipe(gulp.dest(paths.dist))
        .on('end', done);
});

/**** IMG build ****/

gulp.task('build-img', function (done) {
    gulp.src([paths.src.img])
        .pipe(gulp.dest(paths.dist_img))
        .on('end', done);
});

// this task calls the clean task (located
// in ./clean.js), then runs the build-system
// https://www.npmjs.com/package/gulp-run-sequence

gulp.task('build', function (callback) {
    return runSequence(
        'clean-dev',
        ['build-jsx', 'build-js-libraries', 'build-styles-libraries', 'build-styles', 'build-img'],
        callback
    );
});

gulp.task('re-build', function (callback) {
    return runSequence(
        'clean-dev', ['build-jsx', 'build-styles'],
        callback
    );
});
