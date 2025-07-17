const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const browsersync = require('browser-sync').create();
const gutil = require('gulp-util');

const dir = {
  src: 'src/',
  build: './', // Output to root
  images: 'images/'
};

// CSS settings
const css = {
  src: dir.src + 'assets/css/style.scss',
  watch: dir.src + 'assets/**/*',
  build: dir.build,
  sassOpts: {
    outputStyle: 'nested',
    precision: 3,
    errLogToConsole: true
  },
  processors: [
  
    require('autoprefixer')(),           // ✅ Add autoprefixer here
    require('css-mqpacker')(),           // ✅ Ensure it's invoked as a function
    require('cssnano')()                 // ✅ Ditto here
  ]
};

// CSS processing
gulp.task('css', () => {
  return gulp.src(css.src)
    .pipe(sass(css.sassOpts).on('error', sass.logError))
    .pipe(postcss(css.processors))
    .pipe(gulp.dest(css.build))
    .pipe(browsersync ? browsersync.reload({ stream: true }) : gutil.noop());
});

// Optional: Reload helper for browsersync
const reload = (cb) => { browsersync.reload(); cb(); };
