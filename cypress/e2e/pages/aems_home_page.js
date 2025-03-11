import "cypress-xpath";

export class aems_home_page{

    single_eq_create_new = "[label='Single Equipment']";
    //Create_new= "[label='Create New']";
    Dashboard = "//span[contains(text(),'Dashboard')]";
    WorkOrders = "//span[contains(text(),'Work Orders')]";
    Reports = "//span[contains(text(),'Reports')]";
    search = "//mc-input[@placeholder='Search for a Work Order or Equipment Number']";
    quick_filter_gen = "//div[contains(text(),'Quick Filters')]//following::mc-button[1]";
    work_order_search_results = "//a[contains(text(),'%WO_ID%')]";
    work_order_table_list = "//mc-table[@data-cy='work-order-list']";
    export_wo_reports = "//span[contains(text(),'Export Workorders')]";
    menu_dropdown = "//mc-button[@label='menu']";
    multiple_equipments = "//mc-list[@role='menu']";
    
    intValue;
    check_create_new_WO_displayed()
    {
        cy.get(this.single_eq_create_new, {timeout: 10000}).should('be.visible');
    }
    check_create_new_WO_not_displayed()
    {
        cy.get(this.single_eq_create_new, {timeout: 10000}).should('not.exist');
    }
    check_dashboard_displayed()
    {
        cy.xpath(this.Dashboard, {timeout: 10000}).should('be.visible');
    }
    check_workorders_displayed()
    {
        cy.xpath(this.WorkOrders, {timeout: 10000}).should('be.visible');
    }

    check_reports_displayed()
    {
        cy.xpath(this.Reports, {timeout: 10000}).should('be.visible');
    }

    check_homepage_details()
    {
        //this.check_dashboard_displayed();
        this.check_workorders_displayed();
        this.check_reports_displayed();
        this.check_create_new_WO_displayed();
        
    }

    click_create_new_WO()
    {
        cy.get(this.single_eq_create_new, {timeout:4000}).click();
    }

    search_eq_number(eq_number)
    {
        cy.xpath(this.search, {timeout:20000}).shadow().find('input').type(eq_number+"{enter}");
        cy.wait(10000);
    }

    check_if_work_order_displayed(work_order_id)
    {
        cy.xpath(this.work_order_search_results.replace('%WO_ID%',work_order_id), {timeout:25000}).should('be.visible');
    }


    
    click_multiple_equipments()
    {
        cy.xpath(this.menu_dropdown, {timeout:30000}).click();
        cy.xpath(this.multiple_equipments, {timeout:45000}).click();

    }

    apply_quick_filter()
    {
        cy.xpath(this.quick_filter_gen, {timeout:20000}).shadow().find('button').then(($elem) => {
            const text = $elem.text();
            // cy.log(`Full text: ${text}`);
            cy.log({message:text});
            // Extract integer value from text
            this.intValue = parseInt(text.match(/\d+/)[0], 10);
            //cy.log("Extracted integer value: ${this.intValue}");
        cy.xpath(this.quick_filter_gen, {timeout:20000}).shadow().find('button').click();
        })
    }
        
    
    click_reports()
    {
        cy.xpath(this.Reports, {timeout:30000}).click();
        cy.xpath(this.export_wo_reports, {timeout:30000}).click();
    }

    
    check_quick_filter_applied()
    {   
        cy.wait(10000);
    
        cy.xpath(this.work_order_table_list, {timeout: 20000}).shadow().find('[data-cy="table-wrapper"]').then(parent_element=>{
            cy.wrap(parent_element).find('tbody').then(child_element=>{
               const rows = cy.wrap(child_element).find('tr').then(($wrappedLis)=>{
                const numberOfElements = $wrappedLis.length;
                
                cy.log({message:{numberOfElements}});

                expect(numberOfElements).to.equal(this.intValue);
                
               }
            );
              
                
               
            })  
            })  
    }

}