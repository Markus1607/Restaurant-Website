"use strict";


var gulp = require("gulp"),
    sass = require("gulp-sass"),
    browserSync = require('browser-sync').create(),
    autoprefix = require("gulp-autoprefixer");


var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};



gulp.task('sass', function () {
 return gulp.src('./css/**/*.sass')
   .pipe(sass.sync({outputStyle: 'expanded'}).on('error', sass.logError))
   .pipe(autoprefix(autoprefixerOptions))
   .pipe(gulp.dest('./css'));
});

gulp.task("html", function(){

   gulp.watch("*.html").on('change', browserSync.reload);
})

gulp.task('sass:watch', function () {
  gulp.watch('./css/**/*.sass', ['html', 'sass']);
});
