/* jshint node:true */
'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('test', function () {
  return gulp
    .src('test/*Spec.js')
    .pipe(mocha());
});

gulp.task('default', ['test'], function () {
  gulp.watch(['./problem_*.js'], function () {
    gulp.run('test');
  });
});
