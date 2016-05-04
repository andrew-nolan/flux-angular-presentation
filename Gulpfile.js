var gulp = require('gulp');
var connect = require('gulp-connect');
var mocha = require('gulp-mocha');

gulp.task('serve', function () {
    connect.server({
        root: 'src',
        livereload: true
    });
});

gulp.task('test', function () {
    return gulp.src('test/**/*.js')
        .pipe(mocha());
});
