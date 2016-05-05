System.register(['@angular/core/testing', '@angular/platform-browser-dynamic/testing'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, testing_2;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (testing_2_1) {
                testing_2 = testing_2_1;
            }],
        execute: function() {
            testing_1.setBaseTestProviders(testing_2.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, testing_2.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);
        }
    }
});
//# sourceMappingURL=setup.js.map