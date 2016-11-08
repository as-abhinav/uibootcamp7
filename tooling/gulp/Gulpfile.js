var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins();


var config = {
      commonLib: 'assets/lib',
      jsLib: 'assets/js/lib',
      styleLib: '/lib',
      tmpDist: 'assets/dist',
      dist: 'public'
};

var onError = function (err) {
    console.log(err);
};

/**
 * style task
 * */

gulp.task('sass', function () {

  gulp.src('assets/scss/**/*.scss')
    .pipe(plugins.plumber({
      errorHandler: onError
    }))
    .pipe(plugins.rubySass({
      compass: true,
      style: 'compressed',
      check: true
    }))
    .pipe(plugins.minifyCss({keepSpecialComments: 0}))
    .pipe(plugins.rename({suffix: '.min'}))
    .pipe(gulp.dest(config.dist + '/css/'));
});


gulp.task('js', function () {
  gulp.src([


    'assets/js/main.js'
  ])
    .pipe(plugins.concat('app.js'))
    .pipe(plugins.uglify({mangle: true}))
    .pipe(plugins.rename({suffix: '.min'}))
    .pipe(gulp.dest(config.dist + '/js/'));
});

gulp.task('connect', function() {
  plugins.connect.server({
     root: config.dist,
     port: 9002,
  });
});


/**
 * Watcher tasks
 * */
gulp.task('watch', function () {
    gulp.watch('assets/scss/**/*.scss', ['sass']);
    gulp.watch('assets/js/**/*.js', ['js']);
});


//gulp.task('build', ['fonts', 'js_desktop', 'Sass']);
gulp.task('default', [ 'js', 'sass', 'connect']);

