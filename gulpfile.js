const { src, dest, series, parallel, watch } = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const pug = require('gulp-pug');

const sassTask = function () {
    return src('frw_hvcg/src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('frw_hvcg/dist/css'))
};

const jsTask = function () {
    return src('frw_hvcg/src/js/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(dest('frw_hvcg/dist/js'))
};

const pugTask = function () {
    return src('frw_hvcg/src/view/**/*.pug')
    .pipe(pug())
    .pipe(dest('frw_hvcg/dist/html'))
};

function watchTask() {
    watch(['frw_hvcg/src/js/**/*.js', 'frw_hvcg/src/sass/**/*.scss', 'frw_hvcg/src/view/**/*.pug'],
        parallel(sassTask, jsTask, pugTask))
};

exports.sassTask = sassTask;
exports.jsTask = jsTask;
exports.pugTask = pugTask;
exports.watchTask = watchTask;
exports.default = series(parallel(jsTask, sassTask, pugTask),watchTask);