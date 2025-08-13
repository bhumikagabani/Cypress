//const { Given } = require("@badeball/cypress-cucumber-preprocessor");
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
//import HomePage from "../../support/pageObjects/HomePage"
import HomePage from "../../../../support/pageObjects/HomePage"
import ProductPage from "../../../../support/pageObjects/ProductPage"
const homePage = new HomePage()
const productPage = new ProductPage()

Given('I am on Ecommerce page', function () {

    homePage.goTO(Cypress.env('url') +"/loginpagePractise/#")

})

When('I login to the application', function() {
    homePage.login(this.data.username, this.data.password)
    productPage.pageValidation()
    productPage.getCardCount().should('have.length', 4)
})

When('I login to the application portal', function(dataTable) {
    homePage.login(dataTable.rawTable[1][0], dataTable.rawTable[1][1])
    productPage.pageValidation()
    productPage.getCardCount().should('have.length', 4)
})

When('I add items to Cart', function () {
    productPage.selectProduct(this.data.productName)
    productPage.selectFirstProduct()
    this.cartPage = productPage.goToCart()
})

When('Validate the total price limit', function () {
    this.cartPage.sumOfProducts().then(function (sum) {
        expect(sum).to.be.lessThan(200000);
    })
})

Then('select the country submit and verify Thankyou', function () {
    const confirmationPage = this.cartPage.checkoutItems()//we can use const here as we are oot going to usee this confirma page again anyywhere else 
    //Cypress.config('defaultCommandTimeout', 10000)
    confirmationPage.submitFormDet()
    confirmationPage.getAlertMessage().should('contain', 'Success')
})