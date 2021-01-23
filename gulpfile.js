var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
gulp.task('sass', function() {
   return gulp.src('themes/custom/base/scss/style.scss')
       .pipe(sass())
       .pipe(gulp.dest('themes/custom/base/public/'));
});
gulp.task('nano', function() {
    return gulp.src('themes/custom/base/public/style.css')
        .pipe(cssnano())
        .pipe(gulp.dest('themes/custom/base/public/'));
});
gulp.task('default', gulp.series('sass', 'nano'));