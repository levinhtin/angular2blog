var gulp = require('gulp'),
  inject = require('gulp-inject'),
  del = require('del');

  var paths = {
    webroot: './',
    src: './src/',
    dist: './dist/',
    vendorJs: [
      'es6-shim/es6-shim.min.js',
      'systemjs/dist/system-polyfills.js',
      'angular2/bundles/angular2-polyfills.js',
      'systemjs/dist/system.src.js',
      'rxjs/bundles/Rx.js',
      'angular2/bundles/angular2.dev.js',
      'angular2/bundles/router.dev.js',
      'jquery/dist/jquery.min.js',
      'bootstrap/dist/js/bootstrap.min.js'
    ],
    vendorCss: ['bootstrap/dist/css/bootstrap.css'],
    libDevCss: './src/libs/vendor/css',
    libDevJs: './src/libs/vendor/js',
    themeJs: ['./src/js/clean-blog.js'],
    themeCss: ['./src/css/clean-blog.css']
  };

gulp.task('clean:vendor:js', function(cb){
  return del(['./src/libs/js'], cb);
});
gulp.task('clean:vendor:css', function(cb){
  return del(['./src/libs/css'], cb);
});

gulp.task('clean', ['clean:vendor:js', 'clean:vendor:css']);

gulp.task('copy:libDevJs', function(){
  return gulp.src(paths.vendorJs, { cwd: './node_modules/'})
      .pipe(gulp.dest(paths.libDevJs));
});
gulp.task('copy:libDevCss', function(){
  return gulp.src(paths.vendorCss, { cwd: './node_modules/'})
      .pipe(gulp.dest(paths.libDevCss));
});

gulp.task('copy', ['clean', 'copy:libDevJs', 'copy:libDevCss']);

gulp.task('inject:dev', ['clean', 'copy'], function(){
  return gulp.src(paths.webroot + 'index.html')
    .pipe(inject(gulp.src([paths.libDevJs + '/jquery*.js',
                          paths.libDevJs + '/bootstrap*.js',
                          paths.libDevJs + '/system*.js',
                          paths.libDevJs + '/*.js',
                          '!./src/libs/vendor/js/angular2*.js'],
                          { read: false }),
                      { ignorePath: 'src', addRootSlash: false, starttag: '<!-- inject:vendor:{{ext}} -->' }))
    .pipe(inject(gulp.src(paths.libDevCss + '/*.css', { read: false }), { ignorePath: 'src', addRootSlash: false, starttag: '<!-- inject:vendor:{{ext}} -->' }))
    // -------------------------------
    .pipe(inject(gulp.src([paths.libDevJs + '/angular2*.js', paths.libDevJs + '/router.dev.js'], { read: false }), { ignorePath: 'src', addRootSlash: false, starttag: '<!-- inject:angular2 -->' }))
    //-------------------------------
    .pipe(inject(gulp.src(paths.themeJs, { read: false }), { ignorePath: 'src', addRootSlash: false, starttag: '<!-- inject:theme:{{ext}} -->' }))
    .pipe(inject(gulp.src(paths.themeCss, { read: false }), { ignorePath: 'src', addRootSlash: false, starttag: '<!-- inject:theme:{{ext}} -->' }))
    
    .pipe(gulp.dest(paths.webroot + '/src'));
});

gulp.task('dev', ['clean', 'copy:libDevJs', 'inject:dev']);

gulp.task('default', function(){
  console.log('Gulp');
});
gulp.task('watch', function() {
  gulp.watch(paths.webroot + 'index.html', ['inject:dev']);
});