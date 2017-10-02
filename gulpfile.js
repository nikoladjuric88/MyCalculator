var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('html', function() {
	gulp.src('src/*.html')
	    .pipe(gulp.dest('dist'));
});

gulp.task('js', function() {
	return gulp.src('src/file1.js')
	.pipe(browserify({ debug: true}))
	.pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
	gulp.watch('src/**/*.html', ['html']);
	gulp.watch('src/**/*.js', ['js']);
});

gulp.task('default', ['html', 'js', 'watch']);