const gulp = require('gulp'),
      autoprefixer = require('gulp-autoprefixer'),
      uncss = require('gulp-uncss'),
      sass = require('gulp-sass');



gulp.task('sass', function(){
   gulp.src('./project/scss/**/*.scss') 
       .pipe(sass().on('error', sass.logError))
       .pipe(autoprefixer({browsers: ['last 20 versions'], cascade: false }))
       .pipe(gulp.dest('./project/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./project/scss/**/*.scss', ['sass']);
});



