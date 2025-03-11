import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

import aems_data from "../../fixtures/aems_constants.json";
import {aems_login_page} from "../pages/aems_login_page";
import { aems_home_page } from "../pages/aems_home_page";
import { aems_reports_page } from "../pages/aems_reports_page";

const lp = new aems_login_page();
const aems_hp = new aems_home_page();

const aems_rp = new aems_reports_page();

Then("User selects filters for report generation on AEMS Reports page", () => {
    
    try{
        aems_rp.select_shop_code('2GU');
        aems_rp.select_status('Purchase Order Created');
        aems_rp.enter_from_date('02-09-2024');
        cy.wait(3000);
        aems_rp.enter_to_date('05-11-2024');
        aems_rp.click_get_reports();
        aems_rp.click_download_reports();

    }

    catch(exception)
    {
        cy.log({message:exception});
        throw new SyntaxError(
            "cannot apply filters"
        );
    }
});

Then("User can see the report generated on AEMS Reports page", ()=>{

    try
    {

        aems_rp.check_report_formation_started();
    }

    catch(exception)
    {
        throw new SyntaxError(
            "Homepage details not displayed",
        );
    }

})
