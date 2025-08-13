//cypress Mocha test framework
/// <reference types="cypress"/>
describe('End 2 End ecomercre test', function () {
    before(function () {//annoatiion used to run this first
        //runs once before all tests in this block
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })
    it('Submit Order', function () {
        //test step

        const productName = this.data.productName// = "Nokia Edge" //constant vaarriable for dynamic variable to be used
       // cy.visit("https://rahulshettyacademy.com/loginpagePractise/#");// to go to this website
       cy.visit(Cypress.env('url') +"/loginpagePractise/#"); //setting env variable gloably for url as it will be sed for QA,prod or staging env. in Cypress.config.js file
       
       cy.get("#username").type(this.data.username)//gettiing locatorr and typing username as rahulshettyacademy type("rahulsheety") to enter but for fixtures use data.username 
        cy.get("#password").type(this.data.password)// 
        cy.contains("Sign In").click()// checking for text avaiilable in whole page and cliickiing on that button

        
        cy.contains("Shop Name").should('be.visible')//asseration for checking to validate if this text is visbile then success
        cy.get("app-card").should('have.length', 4)// asseration for checking length number available on webpage here to be exact it should hhave 4
        cy.get('app-card').filter(`:contains("${productName}")`)//fiilterr is used to filter out the text thta contaiins nokiia edge
            //cy.get('app-card').filter(':contains("Nokia Edge")')
            .then($element => {
                cy.wrap($element).should('have.length', 1)//verifying that only 1 iis selected
                cy.wrap($element).contains('button', 'Add').click()
            })
        cy.get('app-card').eq(0).contains('button', 'Add').click()
        cy.contains('a', 'Checkout').click()// there are two one is link i.e 'a' and another is checkout 'button'
        let sum = 0
        cy.get('tr td:nth-child(4) strong')
            .each($e1 => {
                const amount = Number($e1.text().split(" ")[1].trim())
                sum = sum + amount
            }).then(function () {
                expect(sum).to.be.lessThan(200000)
            })
        cy.contains('button', 'Checkout').click()
        Cypress.config('defaultCommandTimeout', 10000)
        cy.get("#country").type("India")
        //cy.wait(4000)
        cy.get(".suggestions ul li a").click()
        cy.get(".btn-success").click()
        cy.get(".alert-success").should('contain', 'Success')
    })
})
