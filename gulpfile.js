// npm install gulp gulp-mocha gulp-util

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

var jsFiles = ['*.js', 'test/unit/*.js'];

gulp.task('default', ['style', 'mocha'], function () {
    gulp.watch(jsFiles, ['mocha']);
});

gulp.task('mocha', function () {
    return gulp.src(['test/unit/*.js'], { read: false })
        .pipe(mocha({ reporter: 'list' }))
        .on('error', gutil.log);
});

gulp.task('style', function () {
    return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe(jscs());
});  