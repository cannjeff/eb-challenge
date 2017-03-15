var gulp         = require('gulp');
var sourcemaps   = require('gulp-sourcemaps');
var sass         = require('gulp-sass');
var postcss      = require('gulp-postcss')
var autoprefixer = require('autoprefixer');
var config       = require('../config').sass;

gulp.task('sass', function () {
  return gulp.src(config.src)
    .pipe( sourcemaps.init() )
    .pipe( sass().on('error', sass.logError) )
    .pipe( postcss([ autoprefixer ]) )
    .pipe( sourcemaps.write() )
    .pipe( gulp.dest(config.dest) );
});
