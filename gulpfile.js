var gulp      = require('gulp');
var watch     = require('gulp-watch');
var webserver = require('gulp-webserver');
var babel     = require('gulp-babel');

gulp.task('styles', function() {
    return gulp.src('src/**/*.css')
        .pipe(watch('src/**/*.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('react', function () {
    return gulp.src('src/**/*.jsx')
        .pipe(watch('src/**/*.jsx'))
        .pipe(babel({
            presets: ['react']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['styles', 'react']);

gulp.task('webserver', function() {
    return gulp.src('')
        .pipe(webserver({
            livereload: true,
            fallback: 'index.html'
        }));
});

gulp.task('default', ['webserver', 'watch']);