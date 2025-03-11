/// <reference types = "Cypress"/>
import tokendata from "../fixtures/bearer_token/token_details.json"



Cypress.Commands.add('customGet', (url, headers, failOnStatusCode) => {
    return cy.request({
      method: 'GET',
      headers: headers,
      url: url,
      failOnStatusCode: failOnStatusCode
    });
  });

  Cypress.Commands.add("fetchBearerToken", () => {
    cy.request({
      method: 'POST',
      url: "xx", // CDT bearer token ep
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cache-Control' : 'no-cache'
      },
      body: {
        grant_type: tokendata.grant_type_pp,
        client_id: tokendata.client_id_pp, //Cypress.env('client_id'),//Cypress.env('client_id'), //tokendata.client_id
        client_secret: tokendata.client_secret_pp, //Cypress.env('client_secret'), //Cypress.env('client_secret'), //tokendata.client_secret
        scope: tokendata.scope_pp
      }
    
    
    
    });
  });

Cypress.Commands.add('customPost', (url, body, headers, failOnStatusCode) => {
    return cy.request({
      method: 'POST',
      headers: headers,
      url: url,
      body: body,
      failOnStatusCode: failOnStatusCode
    });
  });
Cypress.Commands.add('customDelete', (url, headers, failOnStatusCode) => {
    return cy.request({
      method: 'DELETE',
      headers: headers,
      url: url,
      failOnStatusCode: failOnStatusCode
});
});

Cypress.Commands.add('get_mc_input_element_by_xpath_and_perform_send_keys', (xpath, timeout,type_of_element, text_to_be_typed) => {
   //uses typical xpath {helpful for ppl from the selenium world}

   //params : Xpath : Typical xpath used in selenium
   //timeout : Max timeout to wait for 
   // type_of_element : type of element
   // text_to_be_typed ; text to be typed

    cy.xpath(xpath, {timeout:timeout}).shadow().find(type_of_element).type(text_to_be_typed);
});

Cypress.Commands.add('get_mc_input_element_by_loc_and_perform_send_keys', (cy_loc, timeout, type_of_element,text_to_be_typed) => {
     //params :Cypress locator , Different from standard selenium locator
   //timeout : Max timeout to wait for 
   // type_of_element : type of element
   // text_to_be_typed ; text to be typed

    cy.get(cy_loc, {timeout:timeout}).shadow().find(type_of_element).type(text_to_be_typed);
});

Cypress.Commands.add('customPut', (url, body, headers) => {
    return cy.request({
      method: 'PUT',
      headers: headers,
      url: url,
      body: body,
});





    

});