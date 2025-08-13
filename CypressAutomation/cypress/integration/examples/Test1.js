//cypress Mocha test framework
/// <reference types="cypress"/>
describe('My First Test Suite',function()
{
    it('My FirstTest Case', function()
{
    //test step
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.search-keyword').type('ca')//get the input box and tyype 'ca'
    cy.wait(2000)
    cy.get('.product:visible').should('have.length',4) //verifies the length is 4 
    //parent childd chaining
    cy.get('.products').as('productLocator')
    cy.get('@productLocator').find('.product').should('have.length',4)  
    cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()

    cy.get('@productLocator').find('.product').each(($e1, index, $list) => {
        const textVeg = $e1.find('h4.product-name').text()
        if(textVeg.includes('Cashews')){
           cy.wrap($e1).find('button').click()
        }
    })
    //get website logo
    cy.get('.brand').then(function(logoelement){
        cy.log(logoelement.text())
    })
    //cy.log(logo.text())
   //assert if logo text is correctly displayed
cy.get('.brand').should('have.text','GREENKART')
 

//this is to print in logs
cy.get('.brand').then(function(logoelement)
{
    cy.log(logoelement.text())
 
})

//const logo=cy.get('.brand')
//cy.log(cy.get('.brand').text())
// cy.log(logo.text())
        
    
})
it('My 2nd Test Case', function(){

})
})
