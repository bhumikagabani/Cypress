//cypress Mocha test framework
/// <reference types="cypress"/>
describe('Child window',function()
{
    it('My FirstTest Case', function()
{
    //test step
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    
    cy.get('#opentab').then(function(e1){
       const url= e1.prop('href')
       cy.visit(url)
       cy.origin(url,()=>{
        cy.get("div.sub-menu-bar a[href*='about']").click()
       })
    })
    
    
})
})
