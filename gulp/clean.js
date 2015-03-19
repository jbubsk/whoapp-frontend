module.exports = function (gulp) {
    var del = require('del').sync,
        path = require('./path')();


    gulp.task('clean', function () {
        del(path.build + '/*.*');
    });

};
