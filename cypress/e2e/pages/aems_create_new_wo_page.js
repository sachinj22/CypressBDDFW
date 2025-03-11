import "cypress-xpath";


export class aems_create_new_wo_page{


    equipment_number = "[label='Equipment Number']";
    shop_code = "[label='Shop Code']";
    cause = "[label='Cause']";
    third_part_port = "[label='3rd Party Port']";
    vendor_ref_no = "[placeholder='Vendor Ref No.']";
    mode = "[label='Mode']";
    upload_attachments = "//div[@class='aems-file-upload-drag-drop']";
    attachment_preview = "//div[@class='aems-upload-attachment-preview']/ul/li";
    attachment_close =  "[label='Close']"
    damage_code = "[label='Damage Code']";
    conatiner_details_section = "//strong[contains(text(),'Container Details')]";
    alarm_data_table = ".pure-u-md-5-5 > mc-table";
    input_upload_file = "//input[@type='file']";
    error_file_size = "mc-notification";
    equipment_doesnt_exist = "//span[contains(text(),'Equipment does not exist')]";
    shop_code_option = "//mc-option[contains(text(),'%SHOP_CODE%')]";
    mode_loc = "//mc-option[contains(text(),'%MODE%')]";
    cause_option = "//mc-option[@data-cy='%CAUSE%']";
    displayed_mode_val = "//mc-select[@label='Mode']/mc-option[1]";

    all_modes_val = "//mc-select[@label='Mode']/mc-option";
    // repairline items
    damage_code_loc = "[label='Damage Code']";
    damage_code_options= "[value='%DC_OPTION%']";
    repair_code = "[label='Repair Code']";
    repair_code_ops = "[value='%RC_OPTION%']";
    repair_location_code = "[label='Repair Loc code']";
    repair_code_location_ops = "[value='%RCL_OPTION%']";
    tpi = "[label='TPI']";
    tpi_options = "[value='%TPI_OPTION%']";
    pcs = "[label='Pcs']";
    matcostperpcs = "[label='Material cost/pc']";

    item_total = "[label='Item Total']";
    part = "[label='Part Number']";
    part_value_loc = "[value='%PART%']";

    add_repair_line_item = "[label='Add repair item']";
    delete_line_item = "[label='trash']";
    diakin_repair_error = "//span[contains(text(),'Repair code not applicable for DAIKIN')]";

    submit_work_order = "[data-cy='submit']";
    // error messages
    equipment_num_error = "//mc-input[@label='Equipment Number']/span";
    redelivery_error_msg = "//span[contains(text(),'Any mode other than 8X are not allowed')]";
    shop_limit_excess = `//li[contains(text(),"Work order total cost can't exceed the configured ")]`;
    //li[contains(text(),"Work order total cost can't exceed the configured ")]
    invalid_code_error = "//span[contains(text(),'Invalid Code')]";
    
    check_create_new_wo_page_details()
    {
        cy.get(this.equipment_number, {timeout: 20000}).should('be.visible');
        cy.get(this.shop_code, {timeout:10000}).should('be.visible');
        cy.get(this.cause, {timeout:5000}).should('be.visible');
        //cy.xpath(this.upload_attachments, {timeout:20000}).should('be.visible');
        //cy.get(this.damage_code).first().should('be.visible');
      

    }
    enter_equipment_number(eq_number)
    {   
       
        cy.get_mc_input_element_by_loc_and_perform_send_keys(this.equipment_number, 25000, 'input',eq_number);
        // cy.get(this.equipment_number, {timeout:25000}).shadow().find('input').clear();
        // cy.get(this.equipment_number, {timeout:25000}).shadow().find('input').type(eq_number);
        cy.wait(3000);
        cy.get(this.vendor_ref_no, {timeout:10000}).click();
        
        
    }


    check_vsa_so_not_allowed()
    {
        cy.xpath(this.equipment_num_error, {timeout: 10000}).should('have.text','Equipment type VSA/SO, repair not allowed');
    }

    check_shop_limit_exceeds_error()
    {
        cy.xpath(this.shop_limit_excess, {timeout: 35000}).should('be.visible');
    }
    check_redelivery_error()
    {
        cy.xpath(this.redelivery_error_msg, {timeout: 35000}).should('be.visible');
    }
    check_redelivery_error_should_not_exist()
    {
        cy.xpath(this.redelivery_error_msg, {timeout: 20000}).should('not.exist');
    }
    
    check_if_part_displayed()
    {
        cy.get(this.part, {timeout:10000}).should('be.visible');
    }
    select_shop_by_shop_code(shop_code)
    {
        cy.get(this.shop_code, {timeout:10000}).shadow().find('input').click();
        cy.xpath(this.shop_code_option.replace("%SHOP_CODE%",shop_code)).click();
    }

    select_mode(mode_option)
    {
        cy.get(this.mode, {timeout:10000}).shadow().find('input').click();
        cy.xpath(this.mode_loc.replace("%MODE%",mode_option)).last().click();
        
    }
    select_thirdparty_cause()
    {
        cy.get(this.cause, {timeout:10000}).shadow().find('input').click();
        cy.xpath(this.cause_option.replace("%CAUSE%","CONFIRMED_3RD_PARTY"), {timeout: 10000}).click();
    }

    check_third_party_port_displayed()
    {
        cy.get(this.third_part_port, {timeout:10000}).should('be.visible');
    }

    get_available_modes()
    {   
        cy.wait(5000);
        cy.get(this.mode, {timeout:10000}).shadow().find('input').click();
        cy.log({message: "Clicked mode"});
        cy.wait(5000);
        let optionValues = [];  //storing values in array
        cy.get(this.mode, {timeout: 10000}).then(mode_vals =>{
            const options = mode_vals.find('mc-option');
            options.each((index, opt)=>{
                const optionval = Cypress.$(opt).text();
                optionValues.push(optionval);
                cy.log({message: optionval})
                

            })
           
        })
        // cy.log({message:optionValues});
        return optionValues;
    }

    check_single_available_mode(expected_mode)
    {
        cy.xpath(this.displayed_mode_val).should('contain.text', expected_mode);
    }

    

    check_available_modes_are_related_to_redelivery()
    {
        cy.wait(5000);
        cy.get(this.mode, {timeout:10000}).shadow().find('input').click();
        cy.log({message: "Clicked mode"});
        cy.wait(5000);
        let optionValues = [];  //storing values in array
        cy.get(this.mode, {timeout: 10000}).then(mode_vals =>{
            const options = mode_vals.find('mc-option');
            options.each((index, opt)=>{
                const optionval = Cypress.$(opt).text();
                optionValues.push(optionval);
                cy.log({message: optionval})
                if(optionval=='80 REDELIVERY COST FOR REEFER UNIT')
                    {
                        return true;
                        
                    }
                

            })
           
        })
        return false;
    }

    check_available_modes_are_related_to_disposal()
    {   
        cy.wait(5000);
        cy.get(this.mode, {timeout:10000}).shadow().find('input').click();
        cy.log({message: "Clicked mode"});
        cy.wait(5000);
        let optionValues = [];  //storing values in array
        cy.get(this.mode, {timeout: 10000}).then(mode_vals =>{
            const options = mode_vals.find('mc-option');
            options.each((index, opt)=>{
                const optionval = Cypress.$(opt).text();
                optionValues.push(optionval);
                cy.log({message: optionval})
                if(optionval=='22 NEUTRALISATION REEFER EQUIPMENT')
                    {
                        return true;
                        
                    }
                

            })
           
        })
        return false;
        // cy.log({message:optionValues});
        
    }

    enter_damage_code(damage_code)
    {
        cy.get(this.damage_code_loc).shadow().find('input').then(elements=>{
            const numberOfElements = elements.length;
            cy.log({message:numberOfElements})
            if(numberOfElements>1)
            {
                cy.log({message: "found more than 1 line item"});
                cy.get(this.delete_line_item, {timeout:10000}).find('button').click();
            }
        })
        cy.get(this.damage_code_loc).shadow().find('input').last().type(damage_code);
        cy.get(this.damage_code_loc).shadow().find("[id='listbox']").then(parent_ele=>{
            cy.wrap(parent_ele).find(this.damage_code_options.replace("%DC_OPTION%",damage_code)).click({ multiple: true });
        })
        
    }

    type_repair_code(repair_code_val)
    {
        cy.get(this.repair_code).shadow().find('input').type(repair_code_val);
        cy.get(this.vendor_ref_no, {timeout: 10000}).click();

    }

    enter_repair_code(repair_code_val)
    {
        cy.get(this.repair_code).shadow().find('input').type(repair_code_val);
        cy.wait(5000);
        cy.get(this.repair_code).shadow().find("[id='listbox']").then(parent_ele=>{
            cy.wrap(parent_ele).find(this.repair_code_ops.replace("%RC_OPTION%",repair_code_val)).click();
        })
    }

    enter_repair_location_code(repair_location_code_value)
    {
        cy.wait(3000);
        cy.get(this.repair_location_code).shadow().find('input').type(repair_location_code_value);
        cy.get(this.repair_location_code).shadow().find("[id='listbox']").then(parent_ele=>{
            cy.wrap(parent_ele).find(this.repair_code_location_ops.replace("%RCL_OPTION%",repair_location_code_value)).click();
        })
    }
    enter_tpi_code(tpi_code_value)
    {
        cy.wait(3000);
        cy.get(this.tpi).shadow().find('input').type(tpi_code_value);
        cy.get(this.tpi).shadow().find("[id='listbox']").then(parent_ele=>{
            cy.wait(2500);
            cy.wrap(parent_ele).find(this.tpi_options.replace("%TPI_OPTION%",tpi_code_value)).shadow().find('mc-button').click({force: true});
        })
    }

    enter_part_number(part_number)
    {
        cy.wait(3000);
        cy.get(this.part).shadow().find("[data-cy='mc-input-container']").first().click();
        cy.get(this.part).shadow().find("[data-cy='mc-input-container']").first().then(parent_ele=>{
            cy.wait(2500);
            cy.wrap(parent_ele).find("[id='listbox']").then(child_ele=>{

                cy.wrap(child_ele).find(this.part_value_loc.replace("%PART%",part_number)).click();
            })
        })
        // cy.get(this.part_value_loc.replace("%PART%",part_number)).click();
    }
    
    click_add_repair_item()
    {
        cy.get(this.add_repair_line_item).shadow().find('input').click();
    }

    check_item_total_calc()
    {
        cy.get(this.pcs).invoke('attr','value').then((val1) => {
            // Extract the integer value from the text content
             cy.log({message:val1});  
            const integerValuepcs = parseInt(val1.trim(), 10);
            cy.log({message:integerValuepcs});
        cy.get(this.matcostperpcs).invoke('attr','value').then((val2) => {
            // Extract the integer value from the text content
               
            const integerValuematcost = parseInt(val2, 10);
            cy.log({message:integerValuematcost});

        cy.get(this.item_total).invoke('attr','value').then((val3) => {
        
              
            // Extract the integer value from the text content
            const integerValueitem_total = parseInt(val3, 10);
            cy.log({message:integerValueitem_total});
        expect(integerValuepcs*integerValuematcost).to.eq(integerValueitem_total);
        });
        });
        });
       
    }
    check_if_container_details_displayed()
    {
        cy.xpath(this.conatiner_details_section, {timeout:10000}).should('be.visible');
    }

   
    
    check_invalid_error_displayed()
    {
        cy.get(this.vendor_ref_no, {timeout: 10000}).click();
        cy.xpath(this.invalid_code_error, {timeout:10000}).should('be.visible');
    }

    check_equipment_does_not_exist_error()
    {
        cy.xpath(this.equipment_doesnt_exist, {timeout:10000}).should('be.visible');
    }
    check_if_alarm_data_displayed()
    {
        cy.get(this.alarm_data_table, {timeout:10000}).should('be.visible');
    }
    check_if_alarm_data_not_displayed()
    {
        cy.get(this.alarm_data_table, {timeout:10000}).should('not.exist');
    }
    check_if_container_details_not_displayed()
    {
        cy.wait(7000);
        cy.xpath(this.conatiner_details_section, {timeout:10000}).should('not.exist');
    }
    
    click_on_attachments()
    {
        cy.xpath(this.upload_attachments, {timeout:25000}).click();
    }

    upload_file_larger_than_5()
    {
        cy.xpath(this.input_upload_file).first().selectFile('cypress/fixtures/large.jpg', { force: true });

    }
    upload_multiple_files()
    {
        const file1= 'cypress/fixtures/test1.docx';
        const file2= 'cypress/fixtures/test_multiple.pdf';
        const file3= 'cypress/fixtures/testing123.pdf';
        cy.xpath(this.input_upload_file).first().selectFile([file1, file2,file3], { force: true });
    }

    valid_upload()
    {
        const file2= 'cypress/fixtures/test_multiple.pdf';
        const file3= 'cypress/fixtures/testing123.pdf';
        cy.xpath(this.input_upload_file).first().selectFile([file2,file3], { force: true });
    }

    check_attachment_preview_displayed()
    {
       
        cy.xpath(this.attachment_preview, {timeout: 20000}).first().should('be.visible');
    }

    click_first_attachment()
    {
        cy.xpath(this.attachment_preview, {timeout: 20000}).first().click();
        cy.wait(7000);
    }

    click_close_attachment()
    {
        cy.get(this.attachment_close, {timeout:15000}).shadow('button').click();
    }

    upload_more_than_5_files()
    {   
        const file1= 'cypress/fixtures/test1.docx';
        const file2= 'cypress/fixtures/test2.docx';
        const file3= 'cypress/fixtures/test3.docx';
        const file4= 'cypress/fixtures/test4.docx';
        const file5= 'cypress/fixtures/test5.docx';
        const file6= 'cypress/fixtures/test6.docx';
        cy.xpath(this.input_upload_file).first().selectFile([file1, file2,file3,file4,file5,file6], { force: true });
    }
    
    upload_duplicate_files()
    {   
        const filepath1= 'cypress/fixtures/test_dup.jpg';
        const filepath2= 'cypress/fixtures/test_dup.jpg'
        cy.xpath(this.input_upload_file).first().selectFile([filepath1,filepath2], { force: true });
    }

    upload_zip_file()
    {
        const filepath = 'cypress/fixtures/zip_2MB.zip';
        cy.xpath(this.input_upload_file).first().selectFile(filepath, { force: true });
    }

    check_invalid_file_error()
    {
        cy.get(this.error_file_size, {timeout:10000}).shadow().find('div').should('contain.text','Only .jpg, .png and .pdf files can be uploaded');
        
    }
    check_file_size_error_message()
    {   
        cy.log("inside func");
        cy.get(this.error_file_size, {timeout:10000}).shadow().find('div').should('contain.text','The uploaded file exceeds 5MB');
      
        
    }
    check_file_duplicate_error()
    {
        cy.log("inside func");
        cy.get(this.error_file_size, {timeout:10000}).shadow().find('div').should('contain.text','There are one or more files with the same file name');
    }
    

    check_file_limit_error()
    {
        cy.get(this.error_file_size, {timeout:10000}).shadow().find('div').should('contain.text','You can upload up to 5 files');
    }
    attachment_errors_shouldnot_be_displayed()
    {
        cy.get(this.error_file_size, {timeout:10000}).shadow().find('div').should('not.be.visible');
        cy.get(this.error_file_size, {timeout:10000}).shadow().find('div').should('not.contain.text','The uploaded file exceeds 5MB');
        cy.get(this.error_file_size, {timeout:10000}).shadow().find('div').should('not.contain.text','There are one or more files with the same file name');
        cy.get(this.error_file_size, {timeout:10000}).shadow().find('div').should('not.contain.text','You can upload up to 5 files');
        
    }
    check_workorder_successful_message()
    {
        cy.get(this.error_file_size, {timeout:20000}).shadow().find('div').should('contain.text','Work order created successfully!');
        
    }
    click_submit_work_order()
    {
        cy.get(this.submit_work_order, {timeout:10000}).shadow('div').find('[part="button"]').click({force: true});
    }
    
   
   
    
}