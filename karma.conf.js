module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'build/js/libs.min.js',
            'build/js/templates.min.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'build/js/application.min.js',
            'src/js/app/**/*.spec.js'
        ],
        exclude: [],
        preprocessors: {},
        reporters: ['mocha'],
        plugins: ['karma-chrome-launcher', 'karma-jasmine', 'karma-mocha-reporter'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false
    });
};
