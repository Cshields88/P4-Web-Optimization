'use strict';

var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    minifyHTML = require('gulp-minify-html'),
    minifyCss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    imageop = require('gulp-image-optimization'),
    watch = require('gulp-watch'),
    uncss = require('gulp-uncss');


//Image task
//Compress images folder
gulp.task('image', function(){
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('Production/img'));
});

//Image task
//Compress views folder
gulp.task('view', function(){
    gulp.src('views/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('Production/views'));
});

//Image task
//Optimize images in img folder
gulp.task('imageop', function(cb) {
    gulp.src(['img/**/*.png','src/**/*.jpg','src/**/*.gif','src/**/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('Production/img')).on('end', cb).on('error', cb);
});

//Image task
//Optimize images in views folder
gulp.task('imageopview', function(cb) {
    gulp.src(['views/images/*']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('Production/img')).on('end', cb).on('error', cb);
});

//HTML Minify
//minify HTML
gulp.task('minify-html', function() {
  var opts = {
    conditionals: true,
    spare:true
  };

  return gulp.src('fnmp/*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('Production/'));
});

//CSS Minify
//Minify CSS
gulp.task('css', function() {
  return gulp.src('css/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('Production/css'));
});

//JavaScript uglify
//Minify JavaScript
gulp.task('compress', function() {
  return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('Production/js'));
});

//Watch task
//Watches JavaScript & CSS
gulp.task('watch', function(){
  gulp.watch('js/*.js', ['compress']); //watches JavaScript
  gulp.watch('css/*.css', ['css']);
  gulp.watch('/index.html', ['minify-html']);
});

//PIZZA.HTML
//Gulp un-css
gulp.task('uncss', function () {
    return gulp.src('views/css/*.css')
        .pipe(uncss({
            html: ['views/pizza.html']
        }))
        .pipe(gulp.dest('views/uncss'));
});

gulp.task('pizza-css', function() {
  return gulp.src('views/css/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('Production/views/css'));
});

//Minify JavaScript
gulp.task('pizza-compress', function() {
  return gulp.src('views/js/main.js')
    .pipe(uglify())
    .pipe(gulp.dest('../Production/views/js'));
});
