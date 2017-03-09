var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var autopref = require('gulp-autoprefixer');
var include = require('gulp-include');

gulp.task('watch', ['sass'], function() {
    gulp.watch('app/sass/*.sass', ['sass']);
    gulp.watch('app/**/*.html', browserSync.reload);
    gulp.watch('app/**/*.js', browserSync.reload);
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('sass', function () {
  return gulp.src('app/sass/style.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'))
    .pipe(autopref({
                browsers: ['last 15 versions'],
                cascade: false
            }))
	.pipe(browserSync.reload({stream: true}))
});


gulp.task('default', ['watch', 'sass', 'browser-sync']);