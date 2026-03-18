const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css'); // Minificador

function compileSass() {
  return src('src/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS()) // Minifica el CSS para producción
    .pipe(dest('dist/css'));
}

function watchFiles() {
  watch('src/scss/**/*.scss', compileSass);
}

exports.default = series(compileSass, watchFiles);