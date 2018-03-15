var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
browserSync = require('browser-sync').create();

gulp.task('default', function(){
  console.log('Hooray - gulp task complete');
});

gulp.task('styles', function(){

  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
  .pipe(gulp.dest('./app/temp/styles'));

});

gulp.task('watch', function(){

  watch('./app/index.html', function(){
    browserSync.reload();
  });

//watches any css file in /styles or in any sub-folder of /styles
  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('cssInject');
  });

  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

});


gulp.task('cssInject', ['styles'], function(){
  return gulp.src('./app/temp/styles/styles.css').pipe(browserSync.stream());
});
