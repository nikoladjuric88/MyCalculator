var gulp = require('gulp');
var browserify = require('gulp-browserify');
const babel = require('gulp-babel');

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
		presets: ['es2015']
	}))
	.pipe(gulp.dest('dist'));
});

gulp.task('default', ['html', 'css', 'js']);