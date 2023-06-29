/* eslint-disable @typescript-eslint/no-var-requires */
const { defineConfig } = require('cypress');
const os = require('os');

module.exports = defineConfig({
  env: {
    PLATFORM: os.platform(),
  },

  dev: {
    baseUrl: 'https://admin.master.dev.exberry.io',
    chromeWebSecurity: false,
    specPattern: '/tests/*.cy.ts',
    trashAssetsBeforeRuns: true,
    requestTimeout: 30000,
    responseTimeout: 30000,
    numTestsKeptInMemory: 1,
    defaultCommandTimeout: 30000,
    viewportHeight: 720,
    viewportWidth: 1280,
    setupNodeEvents(on, config) {
      require('./cypress/plugins/index.js')(on, config);

      return config;
    }
  }
});
