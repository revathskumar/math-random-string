var path    = require('path');

module.exports = function(config) {
  // Example set of browsers to run on Sauce Labs
  // Check out https://saucelabs.com/platforms for all browser/platform combos
  var customLaunchers = {
    sl_chrome: {
      base: 'SauceLabs',
      browserName: 'chrome',
      platform: 'linux',
      version: '48'
    },
    sl_firefox: {
      base: 'SauceLabs',
      browserName: 'firefox',
      platform: 'linux',
      version: '45'
    },
    sl_opera: {
      base: 'SauceLabs',
      browserName: 'opera',
      platform: 'linux',
      version: '12'
    },
    sl_osx_safari: {
      base: 'SauceLabs',
      browserName: 'safari',
      platform: 'OS X 10.11',
      version: '10'
    },
    sl_ie_11: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 8.1',
      version: '11'
    },
    sl_edge_14: {
      base: 'SauceLabs',
      browserName: 'microsoftedge',
      platform: 'Windows 10',
      version: '14'
    }
  };

  config.set({
    sauceLabs: {
      testName: 'Math.random().toString(36)'
    },
    singleRun: true,
    customLaunchers: customLaunchers,
    browsers: Object.keys(customLaunchers),
    frameworks: ['mocha'],
    files: [{
      pattern: 'webpack.tests.js',
      watched: true,
      included: true,
      served: true
    }],
    preprocessors: {
      'webpack.tests.js': ['webpack', 'sourcemap']
    },
    reporters: ['dots', 'saucelabs'],
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [{
          test: /\.js?$/,
          loader: 'babel-loader',
          include: [
            path.resolve(__dirname, 'src')
          ]
        }]
      }
    },
    webpackServer: {
      noInfo: true
    }
  });
};
