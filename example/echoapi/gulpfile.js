'use strict';

var gulp = require('gulp'),
    del = require('del'),
    browserify = require('browserify'),
    assign = require('lodash.assign'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    sourcemaps = require('gulp-sourcemaps'),
    gutil = require('gulp-util')

// -------------------------------------------
// Configure the browserify options and callback
// so that we can then add it to a task
// -------------------------------------------

// add custom browserify options here
var customOpts = {
    entries: ['./src/index.js'],
    debug: true
};
var opts = assign({}, customOpts);
var b = browserify(opts);

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
        .pipe(gulp.dest('./dist'));
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

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['compile']);
