//cypress Mocha test framework
/// <reference types="Cypress"/>
describe('My Second Test Suite',function()
{
    it('My FirstTest Case', function()
{
    //test step
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')//iif we want to use id we use it using #
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')//to uncheck checkboox
    // select multiple check box
    cy.get('input[type="checkbox"]').check(['option2','option3'])

    //static drop down
    cy.get('select').select('option2').should('have.value','option2')
    //dynamic dropdown
    cy.get('#autocomplete').type('ind')
    cy.get('.ui-menu-item div').each(($e1, index, $list) => {
        if($e1.text()==="India"){
            cy.wrap($e1).click()
        }
    })
    cy.get('#autocomplete').should('have.value','India')

    //visibility of elements
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')

    //radio buttons
    cy.get('[value="radio2"]').check().should('be.checked')
    
})
})
