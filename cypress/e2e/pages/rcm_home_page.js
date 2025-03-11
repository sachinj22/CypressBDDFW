import "cypress-xpath";
export class rcm_home_page{

    case_search_input_feild = "[name='singleSearch']";
    search_button = "[label='Search']";
    search_results = "a[class='ng-star-inserted']";
    case_holder_search_feild = "[placeholder='Enter UserName']";

    case_holder_suggestion = "mc-c-list[class='mc-c-typeahead--suggestions-list']"

    enter_claim_id_into_search(claim_id)
    {
        cy.get(this.case_search_input_feild).shadow().find('input').type(claim_id);
    }

    click_search_button_on_claim_search()
    {
        cy.get(this.search_button).click();
    }

    check_for_Search_results(claim_id)
    {
        cy.get(this.search_results, {timeout:10000}).should('contain.text', claim_id);
    }

    clear_existing_caseholder()
    {
        cy.get(this.case_holder_search_feild, {timeout:6000}).shadow().find('input').last().clear()
        cy.wait(3000);
    }

    enter_new_case_holder()
    {
        cy.get(this.case_holder_search_feild, {timeout:6000}).shadow().find('input').last().type('Mayuri Boreddy');
        cy.wait(2000);
        cy.get(this.case_holder_search_feild, {timeout:6000}).shadow().find('input').last().clear();
        cy.wait(2000);
        cy.get(this.case_holder_search_feild, {timeout:6000}).shadow().find('input').last().type('Mayuri Boreddy{enter}');
        
        cy.wait(6000);
    }

}
