

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";


import { aems_create_new_wo_page } from "../pages/aems_create_new_wo_page";
import equipment_data from "../../fixtures/equipment_numbers.json";
import { aems_remarks_page } from "../pages/aems_remarks_page";
const aems_create_new = new aems_create_new_wo_page();
const aems_remarks_new = new aems_remarks_page();

Then("User can view an error related to shop material limit on Create New WorkOrder page", () => {
	
    try{
        aems_create_new.check_shop_limit_exceeds_error();
        // aems_remarks_new.click_save_remark();
    }

   
    catch(error)
        {
            throw new Error(
                "Shop limit exceeds total amount to be paid error is not displayed" +error.message,
            );
      
    }
});

