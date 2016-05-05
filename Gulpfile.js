var gulp = require('gulp');
var connect = require('gulp-connect');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');
var webpack = require('webpack');

gulp.task('serve', ['webpack'], function () {
    connect.server({
        root: 'src',
        livereload: true
    });
});

gulp.task('test', function () {
    return gulp.src('test/**/*.js')
        .pipe(mocha());
});

gulp.task('webpack', function (callback) {
    webpack({
        entry: "./src/app.js",
        output: {
            path: "./src/",
            filename: "appbundle.js"
        }
    }, function (err, stats) {
        if (err) {
            throw new gutil.PluginError("webpack", err);
        }
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});