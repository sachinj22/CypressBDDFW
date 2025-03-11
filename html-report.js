const report = require("multiple-cucumber-html-reporter");

report.generate({
	jsonDir: "./cypress/reports/json",
	reportPath: "./cypress/reports/html",
	metadata: {
		browser: {
			name: "chrome",
			version: "115",
		},
		device: "Local test machine",
		platform: {
			name: "mac",
			version: "16.04",
		},
	},
	customData: {
		title: "Run info",
		data: [
			{ label: "Project", value: "AEMS" },
			{ label: "Release", value: "1.0.0" },
			{ label: "Execution Start Time", value: "May 25th 2023, 02:31 PM IST" },
			{ label: "Execution End Time", value: "May 25th 2023, 02:56 PM IST" },
		],
	},
});
