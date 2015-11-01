var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    uglifycss = require('gulp-uglifycss'),
    sass = require('gulp-ruby-sass');

// Scripts tasks
// Uglifies
gulp.task('scripts', function () {
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

// Styles tasks
// Compiles
gulp.task('compile-sass', function () {
    return sass('scss/*.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest('css'));
});
// Uglifies
gulp.task('styles', function () {
    gulp.src('css/**/*.css')
        .pipe(uglifycss({
            'max-line-len': 80
        }))
        .pipe(gulp.dest('build/css'));
});

//Watch task
//Watches JS
gulp.task('watch', function () {
    gulp.watch('js/*.js', ['scripts']);
})

gulp.task('default', ['scripts', 'compile-sass', 'styles', 'watch']);
