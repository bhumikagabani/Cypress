//cypress Mocha test framework
/// <reference types="Cypress"/>
describe('Handling child windows',function()
{
    it('Should handle child window', function()
{
    // Alerts and pop ups
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    
    cy.get("#opentab").invoke('removeAttr','target').click();//opens iin same window
    //cy.get("#opentab").click()// opens in new tab

    //if domain is changed then let cypress know that this is differenct website/orgin/domaiin
    cy.origin('https://www.qaclickacademy.com',() => {
        cy.get("#navbarSupportedContent a[href*='about']").click();
        cy.get(".mt-50 h2").should('contain','QAClick Academy');
    })
    
    
})
})
