module.exports = function (gulp) {
    var ngAnnotate = require('gulp-ng-annotate'),
        concat = require('gulp-concat'),
        templateCache = require('gulp-angular-templatecache'),
        minifyHTML = require('gulp-minify-html'),
        path = require('./path')();

    gulp.task('ng-annotate', ['clean'], function () {
        return gulp.src(path.src + '/**/*.js')
            .pipe(ngAnnotate())
            .pipe(concat('annotate.js'))
            .pipe(gulp.dest(path.build));
    });

    gulp.task('ng-tpl', ['clean'], function () {
        return gulp.src(path.src + '/**/template.html')
            .pipe(minifyHTML())
            .pipe(templateCache('templates.js', {module: 'application', root: 'js'}))
            .pipe(gulp.dest(path.build));
    });
};