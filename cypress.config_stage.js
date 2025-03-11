const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const {
  install,
  ensureBrowserFlags
} = require('@neuralegion/cypress-har-generator');


const setupNodeEvents = async (on, config) => {
  install(on);
	on("before:browser:launch", (browser = {}, launchOptions) => {
    ensureBrowserFlags(browser, launchOptions);
		launchOptions.args.push("--incognito");
    //launchOptions.args.push('--disable-site-per-site-cookies'); 
  
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
      env: {
        delete_url: '',
      },
    
      e2e: {
        projectId: "oirogf",
        hideXHRInCommandLog: true,
        setupNodeEvents:setupNodeEvents,
        specPattern: "**/*.feature",
        baseUrl: "",
        //viewportWidth: 1920,
        //viewportHeight: 1080,
        excludeSpecPattern: ["*.js"],
        supportFile: "cypress/support/e2e.js"
      },
      integration:{
        specPattern:"**/*.spec.js", 
        projectId: "",
        baseUrl: ""
      }
    });
