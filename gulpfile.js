const gulp = require('gulp');
const browserify = require('gulp-browserify');
const babel = require('gulp-babel');
const babelify = require('babelify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

gulp.task('html', function() {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('sass', function() {
    return gulp.src('src/**/*.scss')
        .pipe(sass())
        .pipe(concat('style.css')) 
        .pipe(gulp.dest('dist'));
});

gulp.task('js', function() {
    return gulp.src('src/*.js')
        .pipe(browserify({ debug: true }))
        .pipe(babel({
            presets: ['es2015'],
            sourceType: module
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.html', ['html']);
    gulp.watch('src/**/*.scss', ['sass']);
    gulp.watch('src/**/*.js', ['js']);
});

gulp.task('default', ['html', 'js', 'watch', 'sass']);