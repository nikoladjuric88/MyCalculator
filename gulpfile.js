var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('html', function() {
	gulp.src('src/*.html')
	    .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
	gulp.src('src/*.css')
	    .pipe(gulp.dest('dist'));
});

gulp.task('js', function() {
	return gulp.src('src/calculator.js')
	.pipe(browserify({ debug: true}))
	.pipe(gulp.dest('dist'));
});

gulp.task('default', ['html', 'css', 'js']);