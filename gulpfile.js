const gulp = require('gulp');
const browserSync = require('browser-sync').create();

function serve(done) {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch("*.html").on('change', browserSync.reload);
  gulp.watch("css/*.css").on('change', browserSync.reload);
  gulp.watch("js/*.js").on('change', browserSync.reload);

  done();
}

exports.serve = serve;