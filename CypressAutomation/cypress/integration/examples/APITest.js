//cypress Mocha test framework
/// <reference types="cypress"/>
describe('My First Test Suite', function () {
    it('My FirstTest Case', function () {
        //test step
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
            "name": "Learn Appium",
            "isbn": "bchjws",
            "aisle": "37623",
            "author": "John Doe"
        }).then(function(response){
        expect(response.body).to.have.property("Msg","successfully added")
        expect(response.status).to.eq(200)
    })
})
})
