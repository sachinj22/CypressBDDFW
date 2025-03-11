import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

import aems_data from "../../fixtures/aems_constants.json";
import {aems_login_page} from "../pages/aems_login_page";
import { aems_home_page } from "../pages/aems_home_page";
import { aems_create_new_wo_page } from "../pages/aems_create_new_wo_page";
import equipment_data from "../../fixtures/equipment_numbers.json";

const aems_create_new = new aems_create_new_wo_page();

Then("User enters a equipment number where ownershiptype is VSA on Create New WorkOrder page", () => {
	
    try{
        aems_create_new.enter_equipment_number(equipment_data.vsa_equipment_num);
    }

    catch(exception)
    {
        throw new SyntaxError(
			"Unable to enter equipment number of VSA SO type",
		);
    }
});

Then("User enters a equipment number which is open and redelivered on Create New WorkOrder page",() =>{
    try{
        aems_create_new.enter_equipment_number(equipment_data.open_redelivered_equipment_num);
        cy.wait(10000);
    }

    catch(exception)
    {
        throw new SyntaxError(
			"Unable to enter equipment number that is redelivered",
		);
    }
});
Then("User enters a reefer container that is redelivered on Create New WorkOrder page",()=>{
    try{
        aems_create_new.enter_equipment_number(equipment_data.reefer_redelivered_equipment_num);
        cy.wait(10000);
    }

    catch(exception)
    {
        throw new SyntaxError(
			"Unable to enter reefer equipment number that is redelivered",
		);
    }
});

Then("User enters a dry container that is redelivered on Create New WorkOrder page",()=>{
    try
    {
        aems_create_new.enter_equipment_number(equipment_data.dry_redelivered_equipment_num);
        cy.wait(10000);
    }

    catch(exception)
    {
        throw new SyntaxError(
			"Unable to enter DRY equipment number that is redelivered",
		);
    }
});


Then("User enters a equipment number which is Maersk owned and disposed on Create New WorkOrder page", ()=>{
    try
    {
        aems_create_new.enter_equipment_number(equipment_data.maersk_own__disposed_equipment_num);
        cy.wait(15000);
    }

    catch(exception)
    {
        throw new SyntaxError(
			"Unable to enter equipment number",
		);
    }
});

Then("User enters a dry container that is Maersk owned and inactive on Create New WorkOrder page",()=>{
    try
    {
        aems_create_new.enter_equipment_number(equipment_data.dry_maersk_owned_inactive);
        cy.wait(15000);
    }

    catch(error)
    {
        throw new SyntaxError(
			"Unable to enter equipment number",
		);
    }
});

Then("User can only view modes 23 and 70 on Create New WorkOrder page",()=>{

    try
    {   
       
        //aems_create_new.check_available_modes_are_related_to_redelivery();
        const modes =aems_create_new.check_modes_array();
        // expect(modes.includes('23'));
        // expect(modes.includes('70'));
        
       
    }

    catch(error)
    {
        throw new Error(
			"23 and 70 mode not available" +error.message,
		);
    }

});



Then("User can view modes related to disposed on Create new WorkOrder page",()=>{
    try
    {        
      
        aems_create_new.check_available_modes_are_related_to_disposal();
  
      
    }

    catch(error)
    {
        throw new Error(
			"Disposed modes are not available" +error.message,
		);
    }
})

Then("User can only view mode 85 on Create New WorkOrder page", ()=>{

    try
    {   
       
        //aems_create_new.check_available_modes_are_related_to_redelivery();
        aems_create_new.check_single_available_mode('85');
        
       
    }

    catch(error)
    {
        throw new Error(
			"85 mode not available" +error.message,
		);
    }

});

Then("User can only view mode 82 on Create New WorkOrder page",()=>{
    try
    {   
       
        //aems_create_new.check_available_modes_are_related_to_redelivery();
        aems_create_new.check_single_available_mode('82');
        
       
    }

    catch(error)
    {
        throw new Error(
			"82 mode not available" +error.message,
		);
    }
});

Then("User can only view mode 83 on Create New WorkOrder page",()=>{
    try
    {   
       
        //aems_create_new.check_available_modes_are_related_to_redelivery();
        aems_create_new.check_single_available_mode('83');
        
       
    }

    catch(error)
    {
        throw new Error(
			"82 mode not available" +error.message,
		);
    }
});

Then("User can view a error related to equipment type",()=>{
    try
    {
        aems_create_new.check_vsa_so_not_allowed();
    }

    catch(exception)
    {
        throw new SyntaxError(
			"Error message not dislayed",
		);
    }
})