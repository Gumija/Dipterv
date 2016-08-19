/// <binding BeforeBuild='compile:typescript' AfterBuild='copyFilesToServer' Clean='clean' />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify");
var ts = require("gulp-typescript");
var del = require('del');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
    webroot: "./wwwroot/"
};

paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.css = paths.webroot + "css/**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.concatJsDest = paths.webroot + "js/site.min.js";
paths.concatCssDest = paths.webroot + "css/site.min.css";
paths.scripts = ['scripts/**/*.js', 'scripts/**/*.ts', 'scripts/**/*.map'];
paths.views = 'Views/Angular/**/*.html';

gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css", "clean:scripts", "clean:views"]);

gulp.task("min:js", function () {
    return gulp.src([paths.js, "!" + paths.minJs], { base: "." })
        .pipe(concat(paths.concatJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task("min:css", function () {
    return gulp.src([paths.css, "!" + paths.minCss])
        .pipe(concat(paths.concatCssDest))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);

gulp.task('copy:Scripts', function () {
    gulp.src(paths.scripts).pipe(gulp.dest('wwwroot/scripts'))
});

gulp.task('copy:Views', function () {
    gulp.src(paths.views).pipe(gulp.dest('wwwroot/views'));
});


// Takes long, don't add to copyFilesToServer
// Only needed once dependencies change
gulp.task('copy:node_modules', function () {
    gulp.src([
        'node_modules/rxjs/**/*',
        'node_modules/angular2-in-memory-web-api/**/*',
        'node_modules/@angular/**/*'
    ], { base: './node_modules' })
        .pipe(gulp.dest('./wwwroot/node_modules/'));
})

// Takes long, don't add to copyFilesToServer
// Only needed once dependencies change
gulp.task('copy:Libs', function (done) {
    gulp.src([
      'node_modules/es6-shim/es6-shim.min.js*',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/jquery/dist/jquery.*js',
      'node_modules/bootstrap/dist/js/bootstrap*.js',
      'node_modules/rxjs/bundles/Rx.js',
      'node_modules/reflect-metadata/Reflect.js',
      'Libs/TextHighlighter.js',
    ]).pipe(gulp.dest('./wwwroot/libs/'));

    gulp.src('node_modules/bootstrap/dist/**/*', { base: 'node_modules/bootstrap/dist' })
        .pipe(gulp.dest('./wwwroot/libs/bootstrap'));
});

gulp.task("copyFilesToServer", ["copy:Scripts", "copy:Views", "copy:styles", 'copy:images']);

gulp.task('clean:libs', function () {
    return del(['wwwroot/libs/**/*']);
})

gulp.task('clean:scripts', function () {
    return del(['wwwroot/scripts/**/*']);
});

gulp.task('clean:views', function () {
    return del(['wwwroot/views/**/*']);
});


// Takes long to add these files
// don't add to clean
gulp.task('clean:node_modules', function () {
    return del(['wwwroot/node_modules/**/*']);
})

gulp.task('compile:typescript', function () {

    var tsResult = gulp.src('scripts/**/*.ts', { base: './scripts' })
        .pipe(sourcemaps.init())    // This means sourcemaps will be generated
        .pipe(ts(ts.createProject('scripts/tsconfig.json')));

    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('scripts'));
})

gulp.task('copy:styles', function () {
    gulp.src(['Styles/**/*'], { base: './Styles' })
        .pipe(gulp.dest('./wwwroot/styles/'));
})

gulp.task('copy:images', function () {
    gulp.src(['Images/**/*'], { base: './Images' })
        .pipe(gulp.dest('./wwwroot/images/'));
})