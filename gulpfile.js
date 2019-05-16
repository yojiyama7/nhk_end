const gulp = require("gulp");
// const wait = require('gulp-wait')
const sass = require("gulp-sass");
const sassGlob = require("gulp-sass-glob");

gulp.task("sass", function(done) {
  gulp.src("./css/style.scss")
    .pipe(sassGlob()) // Sassの@importにおけるglobを有効にする
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest("./css"))
  done()
})

gulp.task("watch", function(done) {
  gulp.watch('./css/**.scss', gulp.task("sass"))
  done()
})

gulp.task("default", gulp.task("sass"))