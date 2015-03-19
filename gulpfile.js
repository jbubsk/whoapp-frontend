var gulp = require('gulp'),
    sh = require('shelljs'),
    path = require('./gulp/path')();

var paths = {
    sass: ['./scss/**/*.scss'],
    js: "./www/js/**/*.*"
};


require('./gulp/sass')(gulp);
require('./gulp/angular')(gulp);
require('./gulp/copy')(gulp);
require('./gulp/clean')(gulp);

gulp.task('phonegap-serve', ['copy-scripts', 'copy-css'], function (done) {
    sh.exec('phonegap serve', {async: true});
    gulp.watch(path.css + '/style.scss', ['copy-css']);
    gulp.watch(path.src + '/**/*.html', ['copy-scripts']);
    gulp.watch(path.src + '/**/*.js', ['copy-scripts']);
    done();
});

gulp.task('phonegap-run', ['copy-scripts', 'copy-css'], function (done) {
    //sh.exec('cordova build ios');
    sh.exec('cordova emulate ios --target="iPhone-5"');
    done();
});

gulp.task('watch', ['copy-scripts', 'copy-css'], function (done) {
    gulp.watch(path.css + '/style.scss', ['copy-css']);
    gulp.watch(path.src + '/**/*.html', ['copy-scripts']);
    gulp.watch(path.src + '/**/*.js', ['copy-scripts']);
    done();
});
