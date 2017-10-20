const gulp = require('gulp');
const browserify = require('gulp-browserify');
const babel = require('gulp-babel');
const babelify = require('babelify');

gulp.task('html', function() {
	gulp.src('src/*.html')
	    .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
	gulp.src('src/*.css')
	    .pipe(gulp.dest('dist'));
});

gulp.task('js', function() {
    return gulp.src('src/*.js')
    .pipe(browserify({ debug: true}))
    .pipe(babel({
        presets: ['es2015'],
        sourceType: module
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
	gulp.watch('src/**/*.html', ['html']);
	gulp.watch('src/**/*.css', ['css']);
	gulp.watch('src/**/*.js', ['js']);
});

gulp.task('default', ['html', 'css', 'js', 'watch']);