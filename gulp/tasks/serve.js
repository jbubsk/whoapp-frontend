var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    paths = require('../paths'),
    sh = require('shelljs');

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
gulp.task('serve', ['build'], function (done) {
    //var bodyParser = require('body-parser');

    browserSync({
        open: false,
        port: 9000,
        server: {
            baseDir: ['.']
            /*middleware: [
                function (req, res, next) {
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    next();
                },
                bodyParser.urlencoded({
                    extended: true
                }),
                bodyParser.json(),
                function (req, res, next) {
                    var fs = require('fs'),
                        filePath = './src/model/comments.json',
                        dataForWriting = '';

                    if (req.originalUrl === '/src/model/comments.json' && req.method === 'POST') {
                        dataForWriting = JSON.parse(fs.readFileSync(filePath, 'utf8'));
                        dataForWriting.push(req.body);
                        fs.writeFileSync(filePath, JSON.stringify(dataForWriting));
                        res.setHeader('Content-Type', 'application/json');
                        res.statusCode = 200;
                        res.write(JSON.stringify(dataForWriting));
                        res.end();
                    }
                    next();
                }
            ]*/
        }
    }, done);
});


/**
*
* this task runs phonegap serve and will watch for
*/

gulp.task('phonegap-serve', ['build'], function (done) {
    sh.exec('phonegap serve', {async: true});
    gulp.watch(paths.src.js, ['build-js-sources']);
    gulp.watch(paths.src.scss, ['build-styles']);
    //gulp.watch(paths.src + '/**/*.html', ['copy-scripts']);
    done();
});

gulp.task('phonegap-run', ['build'], function (done) {
    sh.exec('cordova build ios');
    sh.exec('cordova emulate ios --target="iPhone-5"');
    done();
});

//gulp.task('watch', ['copy-scripts', 'copy-css'], function (done) {
//    gulp.watch(path.css + '/style.scss', ['copy-css']);
//    gulp.watch(path.src + '/**/*.html', ['copy-scripts']);
//    gulp.watch(path.src + '/**/*.js', ['copy-scripts']);
//    done();
//});