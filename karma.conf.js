module.exports = function(config) {

  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      { pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: true },
      { pattern: 'node_modules/systemjs/dist/system-polyfills.js', included: true, watched: true },
      { pattern: 'node_modules/zone.js/dist/zone.js', included: true, watched: false },
      { pattern: 'node_modules/zone.js/dist/long-stack-trace-zone.js', included: true, watched: false },
      { pattern: 'node_modules/zone.js/dist/async-test.js', included: true, watched: false },
      { pattern: 'node_modules/zone.js/dist/jasmine-patch.js', included: true, watched: false },
      { pattern: 'node_modules/reflect-metadata/Reflect.js', included: true, watched: false },

      { pattern: 'node_modules/rxjs/**', included: false, watched: false },
      { pattern: 'node_modules/@angular/**/*.js', included: false, watched: false },

      { pattern: 'karma-test-shim.js', included: true, watched: true },
      //  'node_modules/phantomjs-polyfill/bind-polyfill.js',

      // paths loaded via module imports
      { pattern: 'src/app/**/*.js', included: false, watched: true },
      
      // paths to support debugging with source maps in dev tools
      { pattern: 'src/app/**/*.ts', included: false, watched: false },
      { pattern: 'src/app/**/*.js.map', included: false, watched: false }
    ],
    preprocessors: {
      'src/app/**/*spec.js': 'coverage'
    },
    // proxied base paths
    proxies: {
      // required for component assests fetched by Angular's compiler
      '/src': '/base/src',
      '/node_modules': '/base/node_modules',
      '/test': '/base/test'
    },
    // Karma plugins loaded
    plugins: [
      // 'karma-mocha-reporter',
      require('karma-mocha-reporter'),
      require('karma-jasmine'),
      // 'karma-jasmine',
      require('karma-coverage'),
      require('karma-phantomjs-launcher'),
      require('karma-chrome-launcher'),
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