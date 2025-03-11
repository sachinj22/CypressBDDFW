import "cypress-xpath";
export class login_page{


    username_feild= "[data-cy='username-input']";
    password_feild ='[data-cy="password-input"]';
    submit_button = '[data-cy="submit-button"]';
    cookies = '[data-test="coi-allow-all-button"]';
    allow_all = "//button[contains(text(),'Allow all')]";
    connected_claims_homepage_header = "//div[contains(text(),'Connected Claims')]";
    usernameVal = Cypress.env("USERNAME");
	pwdVal = Cypress.env("PASSWORD");

    

    accept_cookies()
    {      

        try
        {   

            // cy.get(this.cookies).then($cookies=>{
            //         if($cookies.length>0 && $cookies.is(':visible'))
            //         {
            //             cy.log("Cookies element exists");
            //             cy.get(this.cookies).click();
            //         }
            //         else
            //         {
            //             cy.log("Cookies element does not exist");
            //             return false;
            //         }
            //     })
            cy.get(this.cookies).then(($btn) => {
                if ($btn.is(':visible')) {
                  
                    cy.log("Cookies element exists");
                    cy.get(this.cookies).click();
                    cy.log("Clicked Cookies element");
                } else {
                    cy.log("Cookies element does not exist");
                }
              })


            }

                // if(cy.get('button').contains("Allow all"))
                // {
                //     cy.log("Found cookies");
                //     return true;
                // }
                // // cy.xpath(this.allow_all, {timeout:5000}).first().should("be.visible").then($cookies =>{
                // // if($cookies.is('visible'))
                // else
                // {
                //     cy.log("Couldnt find cookies");
                //     return false;
                // } 
        
            catch(err)
            {
                return false;
            }
           
        
    }

    set_cookies_pref()
    {
        cy.setCookie(
            "cookies_consent",
            JSON.stringify({ cookies_analytics: "granted", cookies_marketing: "granted" })
          );
    }

    click_allow_all()
    {
        if(this.accept_cookies())
        {
            
            cy.log("Handling cookies");
            cy.xpath(this.allow_all, {timeout:5000}).first().click({force: true});
        }
        else
        {
            cy.log("Cookies not found")
        }
    }

    check_home_page_header()
    {
        cy.xpath(this.connected_claims_homepage_header, {timeout: 10000}).last().should('be.visible');
    }
    setUsername() {
    
          
        cy.get(this.username_feild, {timeout: 8000}).shadow().find('input').type(this.usernameVal, {force:true});
        cy.log("Username Set");
	}

	setPassword() {
        cy.get(this.password_feild, {timeout:8000}).shadow().find('input').type(this.pwdVal, {force:true});
        cy.log("Password Set");
	}

    click_login()
    {
        cy.get(this.submit_button, {timeout:5000}).shadow().find('button').click({force:true});
        cy.log("Clicked Login");
    }

    perform_login()
    {
        this.accept_cookies();
        //this.set_cookies_pref();
        this.setUsername();
        this.setPassword();
        this.click_login();
        cy.wait(5000);
        this.check_home_page_header();
        // cy.go('back');
        // cy.reload();
        
    }
}