const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compilarCSS() {
    return src('src/scss/**/*.scss') 
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dist/css'));
}

function scripts() {
    return src('src/js/**/*.js')
        .pipe(dest('dist/js'));
}

function copiarHTML() {
    return src('src/*.html')
        .pipe(dest('dist'));
}

function watchArchivos() {
    watch('src/scss/**/*.scss', compilarCSS);
    watch('src/js/**/*.js', scripts);
    watch('src/*.html', copiarHTML);
}

exports.default = series(
    parallel(compilarCSS, scripts, copiarHTML),
    watchArchivos
);