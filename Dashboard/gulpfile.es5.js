/// <binding AfterBuild='build-sass, default' />
'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('build-sass', function () {
    return gulp.src('./sass/**/*.scss').pipe(sass()).pipe(gulp.dest('./css'));
});

//default task
gulp.task('default', ['build-sass']);

