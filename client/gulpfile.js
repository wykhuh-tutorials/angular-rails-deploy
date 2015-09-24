/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are splitted in several files in the gulp directory
 *  because putting all here was really too long
 */

'use strict';

var gulp = require('gulp');
var wrench = require('wrench');

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
function requireTasks(directory) {
  wrench.readdirSyncRecursive(directory).filter(function(file) {
    return /\.js$/.test(file);
  }).map(function(file) {
    require(directory + '/' + file);
  });
}

requireTasks('./gulp/build');
if (process.env.NODE_ENV !== 'production') {
  requireTasks('./gulp/development');
}


/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['clean'], function () {
  gulp.start('build');
});
