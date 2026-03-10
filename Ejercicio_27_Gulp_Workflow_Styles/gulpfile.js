const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compilarCSS() {
    return src('src/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dist/css'));
}

function watchArchivos() {
    watch('src/scss/**/*.scss', compilarCSS);
}

exports.css = compilarCSS;
exports.default = series(compilarCSS, watchArchivos);