var gulp = require('gulp'),
    sass = require('gulp-ruby-sass');

gulp.task('sass', function () {
    return sass('styles/scss/**/*.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
    gulp.watch('js/*.js', ['scripts']);
});

gulp.task('default', ['watch']);
