var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('pug', function buildHTML() {
    return gulp.src('index.pug')
    .pipe(pug({
    // Your options in here.
    }))
});

gulp.task('scss', function () {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});
   
gulp.task('scss:watch', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
});