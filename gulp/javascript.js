module.exports = (function () {
    'use strict';

    var gulp = require('gulp');
    var concat = require('gulp-concat');
    var uglify = require('gulp-uglify');
    var gutil = require('gulp-util');
    var mainBowerFiles = require('gulp-main-bower-files');
    var gulpfilter = require('gulp-filter');

    return {
        build: {
            application: buildApplication,
            vendor: buildVendor
        }
    };

    function buildApplication () {
        return gulp.src(
            [
                'src/app/**/*.module.js',
                'src/app/**/*.js'
            ])
            .pipe(uglify().on('error', gutil.log))
            .pipe(concat('application.js'))
            .pipe(gulp.dest('dist/'));
    }

    function buildVendor () {
        return gulp.src('bower.json')
            .pipe(mainBowerFiles( ))
            .pipe(gulpfilter('**/*.js'))
            .pipe(uglify().on('error', gutil.log))
            .pipe(concat('libraries.js'))
            .pipe(gulp.dest('dist/'));
    }
})();