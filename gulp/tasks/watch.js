var gulp = require('gulp');
var paths = require('../paths');
var browserSync = require('browser-sync');

/**
 * outputs changes to files to the console
 * @param event
 */
function reportChange(event){
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

/**
 *
 * this task wil watch for changes to js, html, and css files and call the reportChange method.
 * Also, by depending on the serve task, it will instantiate a browserSync session
 *
 */

gulp.task('watch', ['serve'], function() {
  gulp.watch(paths.src.js, ['build-jsx']).on('change', reportChange);
  gulp.watch(paths.src.scss, ['build-styles', browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.src.html, browserSync.reload).on('change', reportChange);
  gulp.watch(paths.dist + '**/*.*', browserSync.reload).on('change', reportChange);
});
