const gulp = require("gulp");
const sass = require("gulp-sass");
const del = require("del");

// convert the App.scss file to css using the 'sass' method
// put the new file in css/
gulp.task("styles", () => {
  return gulp
    .src("./App.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css/"));
});

// used to delete the App.css file before compiling the new styles
gulp.task("clean", () => {
  return del(["css/App.css"]);
});

gulp.task("default", gulp.series(["clean", "styles"]));
