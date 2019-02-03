const puppeteer = require('puppeteer')

exports.config = {
  directConnect: true,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless', '--no-sandbox', '--disable-dev-shm-usage'],
      binary: puppeteer.executablePath()
    }
  },
  suites: {
    suite1: ['example-spec.js'],
    suite2: ['example-spec.js'],
  },

  // Spec patterns are relative to the configuration file location passed
  // to protractor (in this example conf.js).
  // They may include glob patterns.
  specs: ['example-spec.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true // Use colors in the command line report.
  }
}
