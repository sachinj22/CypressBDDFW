import "cypress-xpath";
export class aems_login_page{


    username_feild= "[data-cy='username-input']";
    password_feild ='[data-cy="password-input"]';
    submit_button = '[data-cy="submit-button"]';
    cookies = "//button[@data-test='coi-allow-all-button']";
    allow_all = "//button[contains(text(),'Allow all')]";
    aems_home_page_header = "//span[contains(text(),'Advanced Equipment Maintenance System')]";
    logout = "[label='Logout']";
    usernameVal = Cypress.env("USERNAME");
	pwdVal = Cypress.env("PASSWORD");

    

    accept_cookies()
    {      
   
            cy.xpath(this.cookies, {timeout: 30000}).then(($btn) => {
                if ($btn.is(':visible')) {
                  
                    cy.log("Cookies element exists");
                    cy.wrap(this.cookies).click();
                    cy.log("Clicked Cookies element");
                } else {
                    cy.log("Cookies element does not exist");
                }
              })          
        
    }

    check_aems_home_page_header()
    {
        cy.xpath(this.aems_home_page_header, {timeout: 20000}).should('be.visible');
    }
  
    setUsername() {
    
          
        cy.get(this.username_feild, {timeout: 8000}).shadow().find('input').type("xx", {force:true});
        cy.log("Username Set");
	}

    setUsername_by_usertype(usertype)
    {
        cy.get(this.username_feild, {timeout: 8000}).shadow().find('input').type(usertype, {force:true});
        cy.log("Username Set");
    }
	setPassword() {
        cy.get(this.password_feild, {timeout:8000}).shadow().find('input').type("xx", {force:true});
        cy.log("Password Set");
	}

    perform_login_based_on_usertype(usertype)
    {
        //this.accept_cookies();
        this.setUsername_by_usertype(usertype);
        this.setPassword();
        this.click_login();
        this.check_aems_home_page_header();
    }
    click_login()
    {
        cy.get(this.submit_button, {timeout:5000}).shadow().find('button').click({force:true});
        cy.log("Clicked Login");
    }

    perform_login()
    {
        //this.accept_cookies();
        this.setUsername();
        this.setPassword();
        this.click_login();
        this.check_aems_home_page_header();
       
        
    }


    perform_logout()
    {
        cy.get(this.logout, {timeout:10000}).shadow().find('button').click({force:true});
    }
}