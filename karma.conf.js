module.exports = function(config) {
  var dependencies = require('./package.json').dependencies;
  var excludedDependencies = [
    'systemjs', 'zone.js'
  ];
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      // paths loaded by Karma
      // JS vendor for angular2
      { pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: true },
      { pattern: 'node_modules/es6-shim/es6-shim.min.js', included: true, watched: true },
      { pattern: 'node_modules/reflect-metadata/Reflect.js', included: true, watched: true },
      { pattern: 'node_modules/zone.js/dist/zone.js', included: true, watched: true },
      
      // { pattern: 'node_modules/systemjs/dist/system-polyfills.js', included: true, watched: true },
      // { pattern: 'node_modules/zone.js/dist/async-test.js', included: true, watched: true },
      // { pattern: 'node_modules/zone.js/dist/fake-async-test.js', included: true, watched: true },

      
      // 'node_modules/zone.js/dist/long-stack-trace-zone.min.js',
      // 'node_modules/zone.js/dist/zone-microtask.js',
      // 'node_modules/zone.js/dist/long-stack-trace-zone.js',
      // 'node_modules/zone.js/dist/jasmine-patch.js',
      
      { pattern: 'systemjs.config.js', included: true, watched: true },

      // End vendor

      // { pattern: 'node_modules/angular2/bundles/testing.dev.js', included: true, watched: true },
      { pattern: 'karma-test-shim.js', included: true, watched: true },
      //  'node_modules/phantomjs-polyfill/bind-polyfill.js',

      // paths loaded via module imports
      { pattern: 'src/app/**/*.js', included: false, watched: true },

      { pattern: 'test/**/*.js', included: false, watched: true },
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
      "/node_modules/": "/base/node_modules/",
      "/test/": "/base/test/"
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
  
  Object.keys(dependencies).forEach(function(key) {
    if(excludedDependencies.indexOf(key) >= 0) { return; }

    config.files.push({
        pattern: 'node_modules/' + key + '/**/*.js',
        included: false,
        watched: false
    });
  });
}