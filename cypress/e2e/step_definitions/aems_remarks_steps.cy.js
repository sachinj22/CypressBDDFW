

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";


import { aems_create_new_wo_page } from "../pages/aems_create_new_wo_page";
import equipment_data from "../../fixtures/equipment_numbers.json";
import { aems_remarks_page } from "../pages/aems_remarks_page";
const aems_create_new = new aems_create_new_wo_page();
const aems_remarks_new = new aems_remarks_page();

Then("User enters a remark {string} on Create new Work Order page", (remark) => {
	
    try{
        aems_remarks_new.type_remarks(remark);
        // aems_remarks_new.click_save_remark();
    }

   
    catch(error)
        {
            throw new Error(
                "Failed to enter remarks" +error.message,
            );
      
    }
});

