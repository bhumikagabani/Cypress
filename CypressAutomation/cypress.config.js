const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");


async function setupNodeEvents(on, config) { // to run feature files
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}
module.exports = defineConfig({
  projectId: 'd857ob',
  defaultCommandTimeout: 6000,
  reporter: 'cypress-mochawesome-reporter', //creatiing reports
  video: true,

  env: { //adding golable variable for different environmnets
    url: "https://rahulshettyacademy.com"
  },
  retries: {
    runMode: 1,
  },
  projectId: "d857ob",
  e2e: {
    //setupNodeEvents(on, config) {
    setupNodeEvents,//as we delacred this function outside so we can simply call this function here
    // implement node event listeners here

    //require('cypress-mochawesome-reporter/plugin')(on);//reports



    specPattern: 'cypress/integration/examples/*.js',
    //specPattern: 'cypress/integration/examples/BDD/*.feature' //telling all specs are here to run
  },
});
