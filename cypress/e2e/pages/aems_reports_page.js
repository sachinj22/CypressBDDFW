import "cypress-xpath";

export class aems_reports_page {


   reports_shopcode = "//mc-multi-select[@label='Shop Code']";
   sample_shop = "//mc-option[@value='%SHOP_CODE%']";
   status ="//mc-multi-select[@label='Status']";
   status_names = "//mc-option[@data-cy='%STATUS_NAME%']";
   from_date = "//mc-input-date[@label='From']";
   to_date = "//mc-input-date[@label='To']";
   get_reports = "//mc-button[@data-cy='get-report']";
   report_formation_icon = "//mc-button[@icon='arrow-clockwise']";
   download_reports = "//mc-table[@data-cy='work-order-list']/div[1]";
   
    select_shop_code(shop_code_ip)
    {
        cy.xpath(this.reports_shopcode, {timeout:8000}).shadow('div').find('[class="container"]').click();
        cy.xpath(this.sample_shop.replace('%SHOP_CODE%',shop_code_ip), {timeout:10000}).click();

    }

    select_status(status_ip)
    {
        cy.xpath(this.status, {timeout:8000}).shadow('div').find('[class="container"]').click();
        cy.xpath(this.status_names.replace("%STATUS_NAME%",status_ip), {timeout:10000}).click();
    }

    enter_from_date(from_date_ip)
    {
        cy.xpath(this.from_date, {timeout:7000}).shadow('div').find('[class="container"]').type(from_date_ip);
        cy.wait(3000);
        cy.xpath(this.from_date, {timeout:7000}).shadow('div').find('[class="container"]').type("{enter}");
    }

    enter_to_date(to_date_ip)
    {
        cy.xpath(this.to_date, {timeout:7000}).shadow('div').find('[class="container"]').type(to_date_ip);
        cy.wait(3000);
        cy.xpath(this.to_date, {timeout:7000}).shadow('div').find('[class="container"]').type("{enter}");
        
    }
    
    click_get_reports()
    {
        cy.xpath(this.get_reports, {timeout:5000}).click();
    }

    click_download_reports()
    {
        cy.xpath(this.download_reports, {timeout:50000}).click();
    }

    check_report_formation_started()
    {
        cy.xpath(this.report_formation_icon, {timeout:7000}).should('be.visible');
    }

    

    
}