import "cypress-xpath";

export class aems_bulk_wo_page{

    shop_code = "//mc-select[@label='Shop Code']";
    shop_code_option = "//mc-option[contains(text(),'%SHOP_CODE%')]";
    mode = "//mc-select[@label='Mode']";
    mode_loc = "//mc-option[contains(text(),'%MODE%')]";
    equipment_number = "//mc-input[@formcontrolname='equipmentNumber']";
    submit_bulk_wo = "//mc-button[@data-cy='submit']";
    toast = "mc-toast";
    success_notification = "mc-notification";
    click_vendors_ref_number = "//mc-input[@formcontrolname='vendorsReference']";
    redelivery_error = "//span[contains(text(),'Redelivery containers are not allowed')]";

    select_shop_code(shop_code)
    {
        cy.xpath(this.shop_code, {timeout: 6000}).shadow().find('div[class="container"]').click();
        cy.xpath(this.shop_code_option.replace("%SHOP_CODE%",shop_code),{timeout: 6000}).click();

    }


    select_mode(mode)
    {
        cy.xpath(this.mode,{timeout: 6000}).shadow().find('div[class="container"]').click();
        cy.xpath(this.mode_loc.replace("%MODE%",mode),{timeout: 6000}).click();
    }

    enter_first_equipment(equipment_no)
    {
       cy.xpath(this.equipment_number, {timeout: 6000}).shadow().find('div[class="container"]').type(equipment_no);
    }
    check_for_redelivery_error_msg()
    {
        cy.xpath(this.redelivery_error, {timeout:5000}).should('be.visible');
    }
    enter_second_equipment(equipment_no2)
    {
       cy.xpath(this.equipment_number, {timeout: 6000}).last().shadow().find('div[class="container"]').type(equipment_no2);
    }
    click_vendors_ref_number_bulk()
    {
        cy.xpath(this.click_vendors_ref_number, {timeout:6000}).first().shadow().find('div[class="container"]').click();
    }
   
    click_submit()
    {
        cy.xpath(this.submit_bulk_wo, {timeout:5000}).click();
    }

    check_success_notification()
    {
        cy.get(this.toast, {timeout:10000}).last().find('mc-notification').should('contain.text', "Submitted successfully! Check notification for status");
    }
   

}