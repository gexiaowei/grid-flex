/**
 * gulpfile.js
 * @author Vivian
 * @version 1.0.0
 * copyright 2014-2017, gandxiaowei@gmail.com all rights reserved.
 */
const gulp = require('gulp');
const clean_css = require('gulp-clean-css');

gulp.task('minify-css', () => {
    return gulp.src('src/grid.css')
        .pipe(clean_css({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist'));
});