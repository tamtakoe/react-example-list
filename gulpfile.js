var gulp      = require('gulp');
var watch     = require('gulp-watch');
var webserver = require('gulp-webserver');
var babel     = require('gulp-babel');

gulp.task('watch', function () {
    return gulp.src('src/**/*.jsx')
        .pipe(watch('src/**/*.jsx'))
        .pipe(babel({
            presets: ['react']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('webserver', function() {
    return gulp.src('')
        .pipe(webserver({
            livereload: true,
            fallback: 'index.html'
        }));
});

gulp.task('default', ['webserver', 'watch']);