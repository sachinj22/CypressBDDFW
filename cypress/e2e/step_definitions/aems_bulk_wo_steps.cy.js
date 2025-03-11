

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";


import { aems_create_new_wo_page } from "../pages/aems_create_new_wo_page";


import { aems_bulk_wo_page } from "../pages/aems_bulk_wo_page";







const aems_bulk_wo = new aems_bulk_wo_page();


Then("User selects shop {string} from Bulk WO page", (shop_code) => {
    
    try{
        aems_bulk_wo.select_shop_code(shop_code);
    }

   
    catch(error)
        {
            throw new Error(
                "Cannot select Shop code" +error.message,
            );
      
    }
});

Then("User selects Mode {string} from Bulk WO page", (mode_option)=>{
    try{
        aems_bulk_wo.select_mode(mode_option);
    }

    catch(error)
    {
        throw new Error(
            "Cannot select Mode" +error.message,
        );
    }
});

Then("User cleans up data for Bulk WO creation",()=>{

    cy.log({message: "Deleting WO associated with MCAU6024920 and MCAU6025232"});
        
    cy.fetchBearerToken()
    .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('access_token');
        let authtoken=null;
        authtoken = response.body.access_token;
        cy.log({message:authtoken});
        let customHeaders = {
            'Authorization': 'Bearer '+authtoken
        };  
            
            cy.customDelete(Cypress.env('delete_url')+'MCAU6024920', customHeaders, false)
            .then((response)=>{
            expect(response.status).to.eq(200);
            var jsonString = JSON.stringify(response.body);
            cy.log({message: jsonString});
            cy.log({message: "Deleted WOs associated with MCAU6024920"});   
            
            
            cy.customDelete(Cypress.env('delete_url')+'MCAU6025232', customHeaders, false)
            .then((response)=>{
            expect(response.status).to.eq(200);
            var jsonString = JSON.stringify(response.body);
            cy.log({message: jsonString});
            cy.log({message: "Deleted WOs associated with MCAU6025232"});   

            })
        
      });
})
})


Then("User enters a redelivery equipment number on Bulk WO page",()=>{
    try
    {
        aems_bulk_wo.enter_first_equipment("TEST0000204");
        aems_bulk_wo.click_vendors_ref_number_bulk();
    }

    catch(error)
    {
        throw new Error(
            "Cannot enter redelivery equipment" +error.message,
        );
    }
});

Then("User can see a error message related to redelivery on Bulk WO page",()=>{
    try
    {
        aems_bulk_wo.check_for_redelivery_error_msg();
    }

    catch(error)
    {
        throw new Error(
            "Cannot find the redelivery error message" +error.message,
        );
    }


});

Then("User clicks submit on a Create Bulk WO page",()=>{
    try{
        aems_bulk_wo.click_submit();
        cy.wait(6000);
        aems_bulk_wo.check_success_notification();

    }

    catch(error)
    {
        throw new Error(
            "Cannot click submit" +error.message,
        );
    }
});

Then("User enters equipment numbers {string} and {string} on Bulk WO page",(equipment1, equipment2)=>{
    
    try{
        aems_bulk_wo.enter_first_equipment(equipment1);
        aems_bulk_wo.enter_second_equipment(equipment2);
    }

    catch(error)
    {
        throw new Error(
            "Cannot enter equipment number" +error.message,
        );
    }
})


