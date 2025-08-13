//cypress Mocha test framework
/// <reference types="cypress"/>
const neatCSV = require("neat-csv")
let productName
describe('JWT Sessioon', () => {
    it('is logged in through local storage', async () => {
        //test step
        cy.LoginAPI().then(function () {
            cy.visit('https://rahulshettyacademy.com/client', {
                onBeforeLoad: function (window) {//before loading the url, this code will be executed as we want to iinject token in local storage
                    window.localStorage.setItem('token', Cypress.env('token'))
                }
            })
        })
        cy.get(".card-body b").eq(1).then(function(ele){
            productName =ele.text()
        })
        cy.get(".card-body button:last-of-type").eq(1).click()
        cy.get("[routerlink*='cart']").click()
        cy.contains("Checkout").click()
        cy.get("[placeholder*='Country']").type("ind")
        cy.get(".ta-results button").each(($e1, index, $list) => {
            if ($e1.text() === " India") {
                cy.wrap($e1).click()
            }
        })
        cy.get(".action__submit").click()
        cy.wait(2000)
        cy.get(".order-summary button").contains("CSV").click()
        //Cypress.config("fileServerFolder")//it give path for our project i.e path will be "/Users/bhumikag/CypressAutomation"
        //cy.readFile("/Users/bhumikag/CypressAutomation/cypress/downloads/order-invoice_bhumigab10.csv")
        cy.readFile(Cypress.config("fileServerFolder") + "/cypress/downloads/order-invoice_bhumigab10.csv")
            .then(async function (text) {
                const csv = await neatCSV(text)//it will create java object
                console.log(csv)
                const actualProductCSV = csv[0]["Product Name"]
                expect(productName).to.equal(actualProductCSV)
            })

    })
})
