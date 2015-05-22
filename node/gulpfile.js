/* jshint node:true */
'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var plumber = require('gulp-plumber');

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('test', function () {
  gulp.watch(['./problem_*.js'], function () {
    return gulp
      .src('test/*Spec.js')
      .pipe(mocha())
      .on('error', handleError);
  });
});

gulp.task('temp', function () {
  gulp.watch(['./problem_029.js', 'test/p29Spec.js'], function () {
    return gulp
      .src('test/p29Spec.js')
      .pipe(mocha({ reporter: 'spec' }))
      .on('error', handleError);
  });
});

gulp.task('default', ['test'], function () {
});
