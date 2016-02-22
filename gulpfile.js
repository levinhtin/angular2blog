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
        'jquery/dist/jquery.min.js',
        'bootstrap/dist/js/bootstrap.min.js'
      ],
      libDevJs: './src/libs/vendor/js',
      themeJs: ['./src/js/clean-blog.js'],
    };

gulp.task('clean', function(cb){
  return del(['./src/libs'], cb);
});

gulp.task('copy:libDevJs', ['clean'], function(){
  return gulp.src(paths.vendorJs, { cwd: './node_modules/'})
      .pipe(gulp.dest(paths.libDevJs));
});

gulp.task('inject:dev', ['clean', 'copy:libDevJs'], function(){
  return gulp.src(paths.webroot + 'index.html')
    .pipe(inject(gulp.src([paths.libDevJs + '/angular2.dev.js']), { starttag: '<!-- inject:angular2 -->' }))
    .pipe(inject(gulp.src([paths.libDevJs + '/*.js', '!./src/libs/vendor/js/angular2.dev.js'], { read: false }), { ignorePath: 'src', addRootSlash: false, starttag: '<!-- inject:vendor:{{ext}} -->' }))
    .pipe(inject(gulp.src(paths.themeJs, { read: false }), { ignorePath: 'src', addRootSlash: false, starttag: '<!-- inject:theme:{{ext}} -->' }))
    .pipe(gulp.dest(paths.webroot + '/src'));
});

gulp.task('dev', ['clean', 'copy:libDevJs', 'inject:dev']);

gulp.task('default', function(){
  console.log('Gulp');
});
gulp.task('watch', function() {
  gulp.watch(paths.webroot + 'index.html', ['inject:dev']);
});