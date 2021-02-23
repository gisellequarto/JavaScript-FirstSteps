const gulp = require('gulp');
const uglifycss = require('gulp-uglifycss');
const concat = require('gulp-concat');

function depsCSS(cb) {
    return cb();
}


function depsFonts(cb) {
    return cb();
}

module.exports = {
    depsCSS,
    depsFonts
}