var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default',function(){
console.log("Hello Gulp works!");
});

gulp.task('html',function(){
console.log("html is works!");
});

gulp.task('styles',function(){
return gulp.src('./assets/styles/styles.css').pipe(gulp.dest('./temp/styles'));
});

gulp.task('watch',function(){

watch('./index.html',function(){
gulp.start('html');
});

watch('./assets/styles/**/*.css',function(){
gulp.start('styles');
});

});
