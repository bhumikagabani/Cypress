//cypress Mocha test framework
/// <reference types="cypress"/>
describe('My First Test Suite', function () {
    it('My FirstTest Case', function () {
        //test step
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        }, {
            statusCode: 200,
            body: [
                {
                    "book_name": "RestAssured with Java",
                    "isbn": "LSA",
                    "aisle": "2303"
                },
            ]
        }).as('bookretrivevals')
        cy.get("button[class='btn btn-primary']").click()
        cy.wait('@bookretrivevals').then(({request,response }) => {
            cy.get('tr').should('have.length', response.body.length + 1)//as main row header will also be counted iin tr
            //response.body.length
        })
        cy.get('p').should('have.text', 'Oops only 1 Book available')

        //length of the response array = rows of the table


    })
})
