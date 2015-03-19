module.exports = function (gulp) {
    var concat = require('gulp-concat'),
        uglifyjs = require('gulp-uglify'),
        uglifycss = require('gulp-uglifycss'),
        path = require('./path')();

    gulp.task('copy-scripts', ['ng-tpl', 'ng-annotate'], function () {
        return gulp.src([
            './bower_components/angular/angular.min.js',
            './bower_components/angular-ui-router/release/angular-ui-router.min.js',
            './bower_components/angular-translate/angular-translate.js',
            path.build + '/**/*.js'
        ])
            .pipe(concat('app.js'))
            //.pipe(uglifyjs())
            .pipe(gulp.dest(path.build));
    });

    gulp.task('copy-css', ['sass'],function () {
        return gulp.src([
            './www/css/style.css',
            './bower_components/bootstrap/dist/css/bootstrap.min.css',
            './bower_components/bootstrap/dist/css/bootstrap-theme.min.css'
        ])
            .pipe(concat('style.css'))
            .pipe(uglifycss())
            .pipe(gulp.dest(path.root));
    });
};