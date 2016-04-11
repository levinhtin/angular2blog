exports.config = {
    baseUrl: 'http://localhost:5000/src/',
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['src/app/**/*.e2e.spect.ts'],
    directConnect: true,
    exclude: [],
    multiCapabilities: [{
        browserName: 'chrome'
    }],
    allScriptsTimeout: 110000,
    getPageTimeout: 100000,
    framework: 'jasmine2',
    jasmineNodeOpts: {
        isVerbose: false,
        showColors: true,
        includeStackTrace: false,
        defaultTimeoutInterval: 400000
    },
    onPrepare: function() {
      browser.ignoreSynchronization = true;
    },
    // seleniumServerJar: "node_modules/protractor/selenium/selenium-server-standalone-2.52.0.jar",
    /**
     * ng2 related configuration
     *
     * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
     * `rootEl`
     *
     */
     useAllAngular2AppRoots: true
};