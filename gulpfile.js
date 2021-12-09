const gulp     = require('gulp');
const nunjucks = require('gulp-nunjucks');
const cssnano = require('gulp-cssnano');
const clean = require('gulp-clean');

gulp.task('cleanTask', function () {
  return gulp.src('dist/*.html')
  .pipe(clean());

});

gulp.task('renderTask', function () {
  return gulp.src('src/*.html')
      .pipe(nunjucks.compile())
      .pipe(gulp.dest('dist'));
});

gulp.task('finishTask' , gulp.parallel(function () {
  return gulp.src('dist/template.html')
  .pipe(clean());
}));

gulp.task('default' , gulp.series('renderTask', 'finishTask'));