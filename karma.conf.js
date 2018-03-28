//jshint strict: false
module.exports = function(config) {
  config.set({

    frameworks: ['mocha', 'sinon', 'chai'],

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'app.js',
      'services/itunes/itunes.service.js',
      'components/**/*.js',
      'detail/*.js',
      'home/*.js'
    ],

    autoWatch: true,

    reporters: ['mocha'],

    client: {
      mocha: {
        reporter: 'html'
      }
    },

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-mocha',
      'karma-sinon',
      'karma-chai',
      'karma-mocha-reporter'
    ]
  });
};
