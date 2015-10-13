'use strict';

var gulp = require('gulp'),
    shell = require('gulp-shell'),
    del = require('del'),
    watchify = require('watchify'),
    browserify = require('browserify'),
    assign = require('lodash.assign'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    gutil = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps'),
    webserver = require('gulp-webserver');

// -------------------------------------------
// Configure the browserify options and callback
// so that we can then add it to a task
// -------------------------------------------

// add custom browserify options here
var customOpts = {
    entries: ['./app/components/app/index.js'],
    debug: true,
    paths: ['./node_modules']
};
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));
b.on('update', bundle); // on any dep update, runs the bundler

function bundle() {
    return b.bundle()
        // log errors if they happen
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('bundle.js'))
        // optional, remove if you don't need to buffer file contents
        .pipe(buffer())
        // optional, remove if you dont want sourcemaps
        .pipe(sourcemaps.init({
            loadMaps: true
        })) // loads map from browserify file
        // Add transformation tasks to the pipeline here.
        .pipe(sourcemaps.write('./')) // writes .map file
        .pipe(gulp.dest('./app/js'));
}


// -------------------------------------------
// Grunt Task Configuration
// -------------------------------------------

/**
 * @description
 * Cleans out the intermediate files that are being generated as part of
 * the typescript compilation phase
 */
gulp.task('clean', function(cb) {
    del([
        'app/js/*',
    ], cb);
});

/**
 * @description
 * Handle compiling the javascript using browserify
 */
gulp.task('browserify', bundle);


// wrapper around our typescript compile and clean
gulp.task('compile', ['clean', 'browserify']);

/**
 * @description
 * NodeJS connect server with livereload
 */
gulp.task('connect', function() {
    gulp.src('app')
        .pipe(webserver({
            livereload: {
                enable: true,
                filter: function(fileName) {
                    if (fileName.match(/.map$/)) { // exclude all source maps from livereload
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            port: 9001,
            directoryListing: false,
            open: true
        }));
});

/**
 * @description
 * Use the gulp watcher instead of tsc watcher
 * This is useful in case we want to link in any other
 * processes as well i.e. LESS / SASS compiler
 */
gulp.task('watch', function() {
    gulp.watch('app/components/*.js', ['compile']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['compile', 'connect', 'watch']);
