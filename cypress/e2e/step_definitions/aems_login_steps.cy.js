import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

import aems_data from "../../fixtures/aems_constants.json";
import {aems_login_page} from "../pages/aems_login_page";


const lp = new aems_login_page();

Given("{string} logs in to AEMS", (usertype)=>{
  switch(usertype)
  {
    case "rcmautomation":
      cy.visit('/');
      lp.perform_login_based_on_usertype("xx");  
      break;
    case "gsc_user":
      cy.visit('/');
      lp.perform_login_based_on_usertype("xx");
      break;
    case "admin_user":
      cy.visit('/');
      lp.perform_login_based_on_usertype("xx");
      break;
    case "manager_user":
      cy.visit('/');
      lp.perform_login_based_on_usertype("xx");

      break;
    case "specialist_user":
      cy.visit('/');
      lp.perform_login_based_on_usertype("xx");
      break;          
             
  }
})    

Given("User logs in to AEMS", () => {
	
    try{

      
      cy.visit('/');
      lp.perform_login();

    }

    catch(exception)
    {
        throw new SyntaxError(
			"Failed to perform login",
		);
    }

    

});

Then("User logs out of AEMS", ()=>{
  try{

      
  
    lp.perform_logout();

  }

  catch(exception)
  {
      throw new SyntaxError(
    "Failed to perform logout",
  );
  }

})