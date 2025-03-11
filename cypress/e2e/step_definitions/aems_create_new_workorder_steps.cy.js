import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

import aems_data from "../../fixtures/aems_constants.json";
import {aems_login_page} from "../pages/aems_login_page";
import { aems_home_page } from "../pages/aems_home_page";
import { aems_create_new_wo_page } from "../pages/aems_create_new_wo_page";
import equipment_data from "../../fixtures/equipment_numbers.json";

const aems_create_new = new aems_create_new_wo_page();

Then("User can view all details of the Create New WorkOrder page", () => {
	
    try{
        aems_create_new.check_create_new_wo_page_details();
    }

    catch(exception)
    {
        throw new SyntaxError(
			"Create new WO details not displayed",
		);
    }
});
When("User enters a equipment number of type Thermoking on Create New WorkOrder page",()=>{
    try
    {
        aems_create_new.enter_equipment_number(equipment_data.thermoking);
    }

    catch(exception)
    {
        throw new SyntaxError(
			"Could not enter equipment number of type thermoking on create new WO page",
		);
    }
})



When("User enters a reefer equipment number on Create New WorkOrder page",()=>{
    try
    {
        aems_create_new.enter_equipment_number(equipment_data.reefer_eq_num);
    }

    catch(error)
    {
        throw new error(
			"Could not enter equipment number of type Reefer"+error.message(),
		);
    }
})

When("User enters a dry equipment number on Create New WorkOrder page", ()=>{
    try
    {
        aems_create_new.enter_equipment_number(equipment_data.dry_eq_num);
    }

    catch(exception)
    {
        throw new SyntaxError(
			"Could not enter equipment number on create new WO page",
		);
    }
})
When("User enters a valid equipment number on Create New WorkOrder page", () =>{
    try
    {
        aems_create_new.enter_equipment_number(equipment_data.valid_equipment_number);
    }

    catch(exception)
    {
        throw new SyntaxError(
			"Could not enter equipment number on create new WO page",
		);
    }
});

When("User enters a invalid equipment number on Create New WorkOrder page", ()=>{
    try
    {
        aems_create_new.enter_equipment_number(equipment_data.invalid_equipment_number);
    }

    catch(exception)
    {
        throw new SyntaxError(
			"Could not enter equipment number on create new WO page",
		);
    }
});

Then("User can view an error message on Create New WorkOrder page",()=>{
    try
    {
        aems_create_new.check_equipment_does_not_exist_error()
    }

    catch(exception)
    {
        throw new SyntaxError(
			"Could not find equipment doesnt exist error message",
		);
    }
})

Then("User can view container details on Create New WorkOrder page", ()=>{
    try
    {
        aems_create_new.check_if_container_details_displayed();
        //aems_create_new.check_if_alarm_data_displayed();
    }

    catch(exception)
    {
        throw new SyntaxError(
			"failed to check Container details",
		);
    }
});
Then("User should not be able to view container details on Create New WorkOrder page", ()=>{
    try
    {
        aems_create_new.check_if_container_details_not_displayed();
        aems_create_new.check_if_alarm_data_not_displayed();
    }

    catch(exception)
    {
        throw new SyntaxError(
			"failed to check Container details",
		);
    }
});
When("User clicks on Attachments on Create New WorkOrder page", ()=>{
    try
    {
        aems_create_new.click_on_attachments();
        
    }

    catch(exception)
    {
        throw new SyntaxError(
			"failed to click on Attachments",
		);
    }
});
Then("User attempts to upload a file larger than 5MB", ()=>{
    try
    {
        aems_create_new.upload_file_larger_than_5();
    }

    catch(exception)
    {
        throw new SyntaxError(
			"failed to upload files",
		);
    }
});

Then("User attempts to upload a valid file on Create New WorkOrder page", ()=>{
    try
    {
        aems_create_new.valid_upload();
    }

    catch(exception)
    {
        throw new SyntaxError(
			"failed to upload files",
		);
    }
})

Then("User can see the uploaded file on Create new WorkOrder page", ()=>{
    try
    {
        aems_create_new.check_attachment_preview_displayed();
        aems_create_new.click_first_attachment();
        // aems_create_new.click_close_attachment();
    }

    catch(exception)
    {
        throw new SyntaxError(
			"failed click and view attachments and close",
		);
    }
})


Then("User attempts to upload multiple files", ()=>{
    try
    {
        aems_create_new.upload_multiple_files();
    }

    catch(exception)
    {
        throw new SyntaxError(
			"failed to upload multiple files",
		);
    }
})

Then("User attempts to upload more than 5 files on Create New WorkOrder page", ()=>{
    try
    {
        aems_create_new.upload_more_than_5_files();
    }

    catch(exception)
    {
        throw new SyntaxError(
			"failed to upload files",
		);
    }
});

Then("User attempts to upload duplicate files",()=>{
    try
    {
        aems_create_new.upload_duplicate_files();
    }

    catch(exception)
    {
        throw new SyntaxError(
			"Cannot upload duplicate files",
		);
    }
})

Then("User attempts to upload invalid file type",()=>{
    try
    {
        aems_create_new.upload_zip_file();
    }

    catch(exception)
    {
        throw new SyntaxError(
			"Failed to upload a zip file",
		);
    }
})

Then("User should not see any error related to Attachments on Create new WorkOrder page",()=>{
    try
    {
        aems_create_new.attachment_errors_shouldnot_be_displayed();
    }
    catch(exception)
    {
        throw new SyntaxError(
			"Attachment errors are displayed",
		);
    }
})

Then("User can see a error message related to allowed file number on Create new WorkOrder page",()=>{
    try
    {
        aems_create_new.check_file_limit_error();
    }

    catch(exception)
    {
        throw new SyntaxError(
			"file limit error message not displayed",
		);
    }
})
Then("User can see a error message related to duplicate files on Create new WorkOrder page",()=>{
    try{
        aems_create_new.check_file_duplicate_error();
    }
    catch(exception)
    {
        throw new SyntaxError(
			"duplicate error message not displayed",
		);
    }
})

Then("User can see a error message related to invalid file type on Create new WorkOrder page",()=>{
    try
    {
        aems_create_new.check_invalid_file_error();
    }

    catch(exception)
    {
        throw new SyntaxError(
			"Invalid File error is not displayed",
		);
    }
})
Then("User can see a error message related to file size on Create new WorkOrder page", ()=>{
    try{
        aems_create_new.check_file_size_error_message();
    }

    catch(exception)
    {
        throw new SyntaxError(
			"file size error message not displayed",
		);
    }
})

Then("User selects shop {string} on the Create New WorkOrder page", (shop_code)=>{
    try{
        aems_create_new.select_shop_by_shop_code(shop_code);
    }

    catch(exception)
    {
        throw new SyntaxError(
			"cannot select file code",
		);
    }
})

Then("User selects Confirmed Third party as Cause", ()=>{
    try{
        aems_create_new.select_thirdparty_cause();
    }

    catch(error)
    {   
        throw error;
    }
})

Then("User can veiw 3rd Party Port input box",()=>{
    try{
        aems_create_new.check_third_party_port_displayed();
    }

    catch(error)
    {   
        throw error;
    }
})



Then("User selects mode {string} on the Create New WorkOrder page", (mode)=>{
    try{
        aems_create_new.select_mode(mode);
    }

    catch(exception)
    {
        throw new SyntaxError(
			"cannot select mode",
		);
    }
})

Then("User selects a Damage code {string} on the Create New WorkOrder page", (damage_code)=>{
    try{
        aems_create_new.enter_damage_code(damage_code);
    }

    catch(exception)
    {
        throw new SyntaxError(
			"cannot select Damage code",
		);
    }
})

Then("User selects a Repair code {string} on the Create New WorkOrder page", (repair_code)=>{
    try{
        aems_create_new.enter_repair_code(repair_code);
    }

    catch(exception)
    {
        throw new SyntaxError(
			"cannot select repair code",
		);
    }
})

Then("User types a Repair code {string} on the Create New WorkOrder page", (repair_code)=>{
    try{
        
        cy.wait(7000);
        aems_create_new.type_repair_code(repair_code);
    }

    catch(exception)
    {
        throw new SyntaxError(
			"cannot type repair code",
		);
    }
})
Then("User selects a Repair location code {string} on the Create New WorkOrder page", (repair_location_code)=>{
    try{
        aems_create_new.enter_repair_location_code(repair_location_code);
    }

    catch(exception)
    {
        throw new SyntaxError(
			"cannot select repair location code",
		);
    }
})
Then("User selects a TPI code {string} on the Create New WorkOrder page", (tpi_code)=>{
    try{
        aems_create_new.enter_tpi_code(tpi_code);
    }

    catch(exception)
    {
        throw new SyntaxError(
			"cannot select TPI code",
		);
    }
})

Then("User can view the Item total value based on Pcs and Material cost per pc on Create New WorkOrder page",()=>{
    try{
        aems_create_new.check_item_total_calc();
    }

    catch(exception)
    {
        throw new SyntaxError(
			"Item total is not displayed as expected",
		);
    }
})
Then("User can view the parts being displayed on Create New WorkOrder page",()=>{
    try{
        aems_create_new.check_if_part_displayed();
    }

    catch(exception)
    {
        throw new SyntaxError(
			"Parts are not displayed",
		);
    }
})

Then("User can select a part number {string} on Create New WorkOrder page",(part_val)=>{
    try{
        aems_create_new.enter_part_number(part_val);
    }

    catch(exception)
    {
        throw new SyntaxError(
			"Unable to select parts",
		);
    }
})

Then("User can view error message related to repair code not applicable on the Create New WorkOrder page", ()=>{
    try
    {
        aems_create_new.check_invalid_error_displayed();
    }

    catch(exception)
    {
        throw new SyntaxError(
			"Able to view repair code not applicable error message",
		);
    }
})

Then("User clicks submit work order on Create new Work Order page", ()=>{
    try
    {   
        cy.wait(5000);
        aems_create_new.click_submit_work_order();
    }

    catch(error)
    {
        throw new Error(
			"Unable to click submit work order" +error.message,
		);
    }
})

Then("User can cleanup work orders for dry containers",()=>{

    cy.log({message: "Work order created successfuly , Now Attempting to delete WO"});
        
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
            
            cy.customDelete(Cypress.env('delete_url')+'TEST0000200', customHeaders, false)
            .then((response)=>{
            expect(response.status).to.eq(200);
            var jsonString = JSON.stringify(response.body);
            cy.log({message: jsonString});   
            //expect(response.body).to.eq(1);   

            })
        
      });

})


Then("User can cleanup work orders for reefer containers",()=>{

    cy.log({message: "Work order created successfuly , Now Attempting to delete WO"});
        
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
            cy.customDelete(Cypress.env('delete_url')+'TEST0000211', customHeaders, false)
            .then((response)=>{
            expect(response.status).to.eq(200);
            var jsonString = JSON.stringify(response.body);
            cy.log({message: jsonString});   
     

            })
        
      });

})

Then("User can view work order successfuly created notification for dry container", ()=>{

    try
    {
        aems_create_new.check_workorder_successful_message();
        
        }
        

    catch(error)
    {
        throw new Error(
			"Unable to view notification" +error.message,
		);
    }

})



Then("User can view work order successfuly created notification for reefer container", ()=>{

    try
    {
        aems_create_new.check_workorder_successful_message();

        }
        

    catch(error)
    {
        throw new Error(
			"Unable to view notification" +error.message,
		);
    }
})

