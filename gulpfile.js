var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function(){
  console.log('Hooray - gulp task complete');
});

gulp.task('styles', function(){
  console.log('post css');
});

gulp.task('html', function(){
  console.log('html hello hello');
});

gulp.task('watch', function(){

  watch('./app/index.html', function(){
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles');
  });

});
