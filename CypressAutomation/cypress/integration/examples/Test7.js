//cypress Mocha test framework
/// <reference types="Cypress"/>
describe('Mouse over',function()
{
    it('My FirstTest Case', function()
{
    //test step
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    
    cy.get('div.mouse-hover-content').invoke('show')// to show menu we use show()
    cy.contains('Top').click() // or cy.contains('Top').click({force: true}) for iinvisible elements
    cy.url().should('include','top')
    
})
})
