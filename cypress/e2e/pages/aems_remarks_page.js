import "cypress-xpath";

export class aems_remarks_page{


   input_remark = "[label='Remarks']";
   save_remark = "[label='Save Remark']";
   
   
    type_remarks(remark)
    {
        cy.wait(5000);
        cy.get(this.input_remark, {timeout: 10000}).shadow('div').find('[class="container  small top "]').then(parent_ele=>{
           cy.wrap(parent_ele).find("[class='inner']").type(remark) });

        // cy.get(this.damage_code_loc).shadow().find("[id='listbox']").then(parent_ele=>{
        //     cy.wrap(parent_ele).find(this.damage_code_options.replace("%DC_OPTION%",damage_code)).click({ multiple: true });
        // })
    }

    click_save_remark()
    {
        cy.get(this.save_remark, {timeout:10000}).shadow('div').find('[aria-label="Save Remark"]').click();

    }

}