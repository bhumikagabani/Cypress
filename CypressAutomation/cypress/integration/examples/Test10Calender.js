//cypress Mocha test framework
/// <reference types="cypress"/>
describe('Calender',function()
{
    it('My FirstTest Case', function()
    {
    //test step
    const monthNumber = "6";
    const date = "15";
    const year = "2027";
    const expectList = [monthNumber,date,year]

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    cy.get(".react-date-picker__inputGroup").click()
    cy.get(".react-calendar__navigation__label").click()
    cy.get(".react-calendar__navigation__label").click()
    cy.contains("button",year).click()
    cy.get(".react-calendar__year-view__months__month").eq(Number(monthNumber)-1).click()
    cy.contains("abbr",date).click()

    //asserrtion
    cy.get(".react-date-picker__inputGroup__input").each(($e1,index)=>{
        cy.wrap($e1).invoke("val").should('eq',expectList[index])
    })
    
    })
})
