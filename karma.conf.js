module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      // paths loaded by Karma
      // JS vendor for angular2
      { pattern: 'node_modules/systemjs/dist/system-polyfills.js', included: true, watched: true },
      { pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: true },
      { pattern: 'node_modules/rxjs/bundles/Rx.js', included: true, watched: true },
      { pattern: 'node_modules/es6-shim/es6-shim.js', included: true, watched: true },
      
      { pattern: 'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js', included: true, watched: true },
      { pattern: 'node_modules/angular2/bundles/angular2-polyfills.js', included: true, watched: true },
      { pattern: 'node_modules/angular2/bundles/angular2.dev.js', included: true, watched: true },
      { pattern: 'node_modules/angular2/bundles/http.dev.js', included: true, watched: true },
      { pattern: 'node_modules/angular2/bundles/router.dev.js', included: true, watched: true },
      // End vendor

      { pattern: 'node_modules/angular2/bundles/testing.dev.js', included: true, watched: true },
      { pattern: 'karma-test-shim.js', included: true, watched: true },
      //  'node_modules/phantomjs-polyfill/bind-polyfill.js',

      // paths loaded via module imports
      { pattern: 'src/app/**/*.js', included: false, watched: true },

      // paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see proxies section)
      // {pattern: 'app/**/*.html', included: false, watched: true },
      // {pattern: 'app/**/*.css', included: false, watched: true },

      // paths to support debugging with source maps in dev tools
      { pattern: 'src/app/**/*.ts', included: false, watched: false },
      { pattern: 'src/app/**/*.js.map', included: false, watched: false }
    ],
    preprocessors: {
      'src/app/**/*.js': 'coverage'
    },
    // proxied base paths
    proxies: {
      // required for component assests fetched by Angular's compiler
      '/src': '/base/src',
    },
    // Karma plugins loaded
    plugins: [
      'karma-mocha-reporter',
      'karma-jasmine',
      'karma-coverage',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
    ],

    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'text-summary' },
        { type: 'json' },
        { type: 'html' }
      ]
    },
    reporters: ['mocha', 'coverage'],

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true,
  });
}