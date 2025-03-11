import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

import aems_data from "../../fixtures/aems_constants.json";
import {aems_login_page} from "../pages/aems_login_page";
import { aems_home_page } from "../pages/aems_home_page";

const lp = new aems_login_page();
const aems_hp = new aems_home_page();


let eq_work_order_map= {
    "SUDU8191540": "500000002"

}
Then("User can view details on AEMSHomepage", () => {
	
    try{
        aems_hp.check_homepage_details();
    }

    catch(exception)
    {
        throw new SyntaxError(
			"Homepage details not displayed",
		);
    }
});

When("User navigates to Bulk WO page",()=>{
    try{

        aems_hp.click_multiple_equipments();
    }

    catch(error)
    {
        throw new Error("cannot click on Multiple equipments");
    }
})

When("User clicks on Create New WorkOrder on AEMSHomepage", ()=>{
    try
    {
        aems_hp.click_create_new_WO();
    }

    catch(exception)
    {
        throw new SyntaxError("failed to click Create new WO");
    }
})
When("User enters {string} as equipment number on AEMSHomepage", (equipment_number)=>{
    try
    {
        aems_hp.search_eq_number(equipment_number);
    }
    
    catch(error)
    {
        throw new Error(
            "Failed to enter equipment or work order number" +error.message,
        );
    }
})

Then("User can see results based on equipment number search", ()=>{
    try
    {
        aems_hp.check_if_work_order_displayed(eq_work_order_map.SUDU8191540);
    }

    catch(error)
    {
        throw new Error(
            "Failed to view results based on equipment search" +error.message,
        );
    }
})

Then("User selects a Quick filter status on AEMSHomepage", ()=>{
    try
    {
        aems_hp.apply_quick_filter();
    }

    catch(error)
    {
        throw new Error(
            "Failed to Apply quick filter" +error.message,
        );
    }
})

Then("User can see results based on Quick filter status",()=>{
    try
    {
        aems_hp.check_quick_filter_applied();
    }

    catch(error)
    {
        throw new Error(
            "cannot see results based on Quick filter status" +error.message,
        );
    }
})

Given("Start record", ()=>{
    cy.recordHar();
})

Then("Stop record", ()=>{
    cy.saveHar();
})

When("User navigates to Reports",()=>{
    try
    {
        aems_hp.click_reports();
        //aems_hp.click_export_reports();
    }

    catch(error)
    {
        throw new Error("cannot navigate to reports");
    }
})

Then("{string} can view Create new workorder feature on AEMS Homepage based on usertype", (usertype)=>{
    try
    {
        switch(usertype)
        {
            case "rcmautomation":
                aems_hp.check_create_new_WO_displayed();
                cy.log({message:"Create new WO is displayed for Shop User"});
                break;

            case "gsc_user":
                aems_hp.check_create_new_WO_not_displayed();
                cy.log({message:"Create new WO is not displayed for gsc_user ie Approver user"});
                break;

            case "admin_user":
                aems_hp.check_create_new_WO_displayed();
                cy.log({message:"Create new WO is displayed for admin_user ie Admin user"});
                break;
            case "manager_user":
                aems_hp.check_create_new_WO_not_displayed();
                cy.log({message:"Create new WO is not displayed for manager_user ie Manager user"});
                break;
        
            case "specialist_user":
                aems_hp.check_create_new_WO_not_displayed();
                cy.log({message:"Create new WO is not displayed for specialist_user ie Specialist user"});
                break;                      
        }
    }

    catch(exception)
    {
        throw new SyntaxError("failed to click Create new WO");
    }
})