var gulp = require('gulp'),
    paths = require('../paths'),
    del = require('del'),
    vinylPaths = require('vinyl-paths');

// deletes all files in the output path
gulp.task('clean-dev', function () {
    return gulp.src([paths.dist_all_dev])
        .pipe(vinylPaths(del));
});

gulp.task('clean-all', function () {
    return gulp.src([paths.dist_all])
        .pipe(vinylPaths(del));
});
