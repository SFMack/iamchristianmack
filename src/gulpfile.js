const gulp = require("gulp");
const sass = require("gulp-sass");
const del = require("del");

gulp.task("styles", () => {
  return gulp
    .src("./App.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css/"));
});

gulp.task("clean", () => {
  return del(["css/App.css"]);
});

gulp.task("default", gulp.series(["clean", "styles"]));