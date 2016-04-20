var gulp = require('gulp'),
  inject = require('gulp-inject'),
  del = require('del');
var tslint = require("gulp-tslint");

  var paths = {
    webroot: './',
    src: './src/',
    dist: './dist/',
    vendorJs: [
      'es6-shim/es6-shim.js',
      'es6-shim/es6-shim.map',
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system-polyfills.js.map',
      'angular2/es6/dev/src/testing/shims_for_IE.js',
      'angular2/bundles/angular2-polyfills.js',
      'systemjs/dist/system.src.js',
      'rxjs/bundles/Rx.js',
      'angular2/bundles/angular2.dev.js',
      'angular2/bundles/router.dev.js',
      'jquery/dist/jquery.min.js',
      'bootstrap/dist/js/bootstrap.min.js',
      'jasmine-core/lib/jasmine-core/jasmine.js',
      'jasmine-core/lib/jasmine-core/jasmine-html.js',
      'jasmine-core/lib/jasmine-core/boot.js'
    ],
    vendorCss: ['bootstrap/dist/css/bootstrap.css',
                'bootstrap/dist/css/bootstrap.css.map',
                'jasmine-core/lib/jasmine-core/jasmine.css'],
    libDevCss: './src/libs/vendor/css',
    libDevJs: './src/libs/vendor/js',
    themeJs: ['./src/js/prettify.js'],
    themeCss: ['./src/css/prettify.css', './src/css/the-shell.css'],
    testJs: ['./src/libs/vendor/js/jasmine.js',
             './src/libs/vendor/js/jasmine-html.js',
             './src/libs/vendor/js/boot.js'],
    testCss: ['./src/libs/vendor/css/jasmine.css'],
    test: ['./src/app/test/*.js']
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
    .pipe(inject(gulp.src([ paths.libDevJs + '/jquery*.js',
                            paths.libDevJs + '/bootstrap*.js',
                            paths.libDevJs + '/system*.js',
                            paths.libDevJs + '/*.js',
                            '!./src/libs/vendor/js/angular2*.js',
                            '!./src/libs/vendor/js/boot.js',
                            '!./src/libs/vendor/js/jasmine*.js'],
                      { read: false }),
                      { ignorePath: 'src', addRootSlash: false, starttag: '<!-- inject:vendor:{{ext}} -->' }))
    .pipe(inject(gulp.src(paths.libDevCss + '/*.css', { read: false }), { ignorePath: 'src', addRootSlash: false, starttag: '<!-- inject:vendor:{{ext}} -->' }))
    // -------------------------------
    .pipe(inject(gulp.src([paths.libDevJs + '/angular2*.js', paths.libDevJs + '/router.dev.js'], { read: false }), { ignorePath: 'src', addRootSlash: false, starttag: '<!-- inject:angular2 -->' }))
    //-------------------------------
    .pipe(inject(gulp.src(paths.themeJs, { read: false }), { ignorePath: 'src', addRootSlash: false, starttag: '<!-- inject:theme:{{ext}} -->' }))
    .pipe(inject(gulp.src(paths.themeCss, { read: false }), { ignorePath: 'src', addRootSlash: false, starttag: '<!-- inject:theme:{{ext}} -->' }))
    //--------------INJECT TEST--------------------------
    .pipe(inject(gulp.src(paths.testJs, { read: false }), { ignorePath: 'src', addRootSlash: false, starttag: '<!-- inject:test:{{ext}} -->' }))
    .pipe(inject(gulp.src(paths.testCss, { read: false }), { ignorePath: 'src', addRootSlash: false, starttag: '<!-- inject:test:{{ext}} -->' }))
    .pipe(inject(gulp.src(paths.test, { read: false }), { ignorePath: 'src', addRootSlash: false, starttag: '<!-- inject:testspec:{{ext}} -->' }))
    
    .pipe(gulp.dest(paths.webroot + '/src'));
});

gulp.task('inject:test', function(){
  return gulp.src(paths.webroot + 'unit-test.html')
    //--------------INJECT TEST--------------------------
    .pipe(inject(gulp.src(paths.testJs, { read: false }), { ignorePath: 'src', addRootSlash: false, starttag: '<!-- inject:test:{{ext}} -->' }))
    .pipe(inject(gulp.src(paths.testCss, { read: false }), { ignorePath: 'src', addRootSlash: false, starttag: '<!-- inject:test:{{ext}} -->' }))
    
    .pipe(gulp.dest(paths.webroot + '/src'));
});

gulp.task('dev', ['clean', 'copy', 'inject:dev']);

gulp.task('default', function(){
  console.log('Gulp');
});
gulp.task('watch', function() {
  gulp.watch(paths.webroot + 'index.html', ['inject:dev']);
});

gulp.task("tslint", function() {
  gulp.src("src/app/**/*.ts")
    .pipe(tslint())
      .pipe(tslint.report("prose", {
        summarizeFailureOutput: true
      }));
});