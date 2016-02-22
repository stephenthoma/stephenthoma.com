'use strict';
var gulp       = require('gulp'),
  minifyCSS    = require('gulp-minify-css'),
  sass         = require('gulp-sass'),
  jade         = require('gulp-jade'),
  rename       = require('gulp-rename');

var config = {
  buildDir: './app/',
  prod: false,
  serve: true
};

gulp.task('sass', function(){
  var dir = config.buildDir;
  var dev = {sourceComments: true};
  var prod = {outputStyle: 'compressed'};
  gulp.src(['./app/static/sass/*.scss'])
    .pipe(sass(config.prod? prod : dev).on('error', sass.logError))
    .pipe(gulp.dest(dir + '/static/css'));
});

gulp.task('jade', function(){
  var dir = config.buildDir;
  var options = {pretty: config.prod? false : true};
  gulp.src(['./app/**/*.jade'])
    .pipe(jade(options))
    .pipe(rename({dirname: ''}))
    .pipe(gulp.dest(dir + '/templates'));
});

gulp.task('watch', function() {
  if(config.serve){
    gulp.watch([ 'app/static/sass/**/*.scss', 'app/static/jade/**/*.jade'], ['sass', 'jade']);
  }
});

gulp.task('default',
  ['sass', 'jade', 'watch']
);
