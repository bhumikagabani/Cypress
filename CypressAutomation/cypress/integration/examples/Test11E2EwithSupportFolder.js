//cypress Mocha test framework
/// <reference types="cypress"/>

import HomePage from "../../support/pageObjects/HomePage"
import ProductPage from "../../support/pageObjects/ProductPage"
import CartPage from "../../support/pageObjects/CartPage"
import ConfirmationPage from "../../support/pageObjects/ConfirmationPage"

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
        const homepage = new HomePage()
        homepage.goTO(Cypress.env('url') +"/loginpagePractise/#")
       // homepage.goTO("https://rahulshettyacademy.com/loginpagePractise/#")//from HomePage.js > goTO() FUNC
        //cy.visit("https://rahulshettyacademy.com/loginpagePractise/#");// to go to this website
        //cy.get("#username").type(this.data.username)//homePage > login()//getting locatorr and typing username as rahulshettyacademy type("rahulsheety") to enter but for fixtures use data.username 
        // cy.get("#password").type(this.data.password)// from HomePage.js > login()
        //cy.contains("Sign In").click()// HomePage.js > login()//checking for text avaiilable in whole page and cliickiing on that button

        homepage.login(this.data.username, this.data.password)
        //cy.contains("Shop Name").should('be.visible')//ProductPage.js > pageValidation()//asseration for checking to validate if this text is visbile then success
        // cy.get("app-card").should('have.length', 4)// ProductPage.js > VerifyCardLimit()//asseration for checking length number available on webpage here to be exact it should hhave 4
        const productPage = new ProductPage()
        productPage.pageValidation()
        productPage.getCardCount().should('have.length', 4)
        productPage.selectProduct(productName)
        /*cy.get('app-card').filter(`:contains("${productName}")`)//fiilterr is used to filter out the text thta contaiins nokiia edge
             //cy.get('app-card').filter(':contains("Nokia Edge")')
             .then($element => {
                 cy.wrap($element).should('have.length', 1)//verifying that only 1 iis selected
                 cy.wrap($element).contains('button', 'Add').click()
             })*/ //ProductPage.js > selectProduct()
        productPage.selectFirstProduct()
        // cy.get('app-card').eq(0).contains('button', 'Add').click() // ProductPage.js > selectFirstProduct()
       // productPage.goToCart()
        const cartPage = productPage.goToCart()
        //cy.contains('a', 'Checkout').click()//ProductPage.js > goToCart() //there are two one is link i.e 'a' and another is checkout 'button'
        //const cartPage = new CartPage()
        
        ///// asked query regarding following and waiting for reply
        cartPage.sumOfProducts().then(function(sum) {
            expect(sum).to.be.lessThan(200000)
        })
        
        /*let sum = 0
          cy.get('tr td:nth-child(4) strong')
              .each($e1 => {
                  const amount = Number($e1.text().split(" ")[1].trim())
                  sum = sum + amount
              }).then(function () {
                  expect(sum).to.be.lessThan(200000)
              })
               */ // //CartPage.js > sumOfProducts() */ // //CartPage.js > sumOfProducts()    
        const confirmationPage = cartPage.checkoutItems()
        // cy.contains('button', 'Checkout').click()
        Cypress.config('defaultCommandTimeout', 10000)

        //const confirmationPage = new ConfirmationPage()
        confirmationPage.submitFormDet()
        confirmationPage.getAlertMessage().should('contain','Success')
        //cy.get("#country").type("India") //ConfirmationPage.js > submitFormDet()
        //cy.wait(4000)
        //cy.get(".suggestions ul li a").click() //ConfirmationPage.js > submitFormDet()
        //cy.get(".btn-success").click() //ConfirmationPage.js > submitFormDet()
        //cy.get(".alert-success").should('contain','Success') //ConfirmationPage.js > getAlertMessage()
    })
})
