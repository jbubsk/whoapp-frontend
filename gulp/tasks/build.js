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
        paths.lib + 'react/react.js'
    ])
        .pipe(concat(paths.dest.lib))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('build-js-sources', function () {
    return browserify(paths.src.app)
        .transform(reactify)
        .bundle()
        .pipe(source(paths.dest.app))
        .pipe(gulp.dest(paths.dist));
});

/**** Stiles build ****/

gulp.task('build-styles', function (done) {
    gulp.src(paths.src.scss)
        .pipe(sass())
        .pipe(gulp.dest(paths.dist))
        .on('end', done);
});


// this task calls the clean task (located
// in ./clean.js), then runs the build-system
// https://www.npmjs.com/package/gulp-run-sequence

gulp.task('build', function (callback) {
    return runSequence(
        'clean-dev',
        ['build-js-sources', 'build-js-libraries', 'build-styles'],
        callback
    );
});

gulp.task('re-build', function (callback) {
    return runSequence(
        'clean-dev',
        ['build-js-sources', 'build-styles'],
        callback
    );
});
