const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");


const setupNodeEvents = async (on, config) => {
	on("before:browser:launch", (browser = {}, launchOptions) => {
		launchOptions.args.push("--incognito");
		return launchOptions;
	});

	await preprocessor.addCucumberPreprocessorPlugin(on, config);
	on(
		"file:preprocessor",
		createBundler({
			plugins: [createEsbuildPlugin.default(config)],
		}),
	);
	return config;
};


      
module.exports = defineConfig({
      defaultCommandTimeout: 20000,
      chromeWebSecurity: false,
      fixturesFolder: false,
      video: true,
    
      e2e: {
        projectId: "oirogf",
        hideXHRInCommandLog: true,
        setupNodeEvents,
        specPattern: "**/*.feature",
        baseUrl: "",
        excludeSpecPattern: ["*.js"],
        supportFile: "cypress/support/e2e.js"
      },
      integration:{
        specPattern:"**/*.spec.js", 
        projectId: "",
        baseUrl: ""
      }
    });
