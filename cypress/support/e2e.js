// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import "cypress-real-events";

// eslint-disable-next-line no-unused-vars
// Cypress.on("uncaught:exception", () => {
// 	return false;
// });

// // Hide fetch/XHR requests from command log
// if (Cypress.config()) {
// 	const app = window.top;
// 	if (
// 		app &&
// 		!app.document.head.querySelector("[data-hide-command-log-request]")
// 	) {
// 		const style = app.document.createElement("style");
// 		style.innerHTML =
// 			".command-name-request, .command-name-xhr { display: none }";
// 		style.setAttribute("data-hide-command-log-request", "");
// 		app.document.head.appendChild(style);
// 	}

beforeEach(() => {
    
    cy.viewport('ipad-2','landscape');
    // Intercept all requests
    cy.intercept('*', (req) => {
      // 
     
      req.headers['X-Requestor'] ="xx";
    });
})
