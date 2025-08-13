import CartPage from "./CartPage"

class ProductPage{
    pageValidation(){
        cy.contains("Shop Name").should('be.visible')
    }

    getCardCount(){
       return cy.get('app-card')
    }

    selectProduct(productName){
        cy.get('app-card').filter(`:contains("${productName}")`)//fiilterr is used to filter out the text thta contaiins nokiia edge
            //cy.get('app-card').filter(':contains("Nokia Edge")')
            .then($element => {
                cy.wrap($element).should('have.length', 1)//verifying that only 1 iis selected
                cy.wrap($element).contains('button', 'Add').click()
            })
    }
    selectFirstProduct(){
        cy.get('app-card').eq(0).contains('button', 'Add').click()
    }
    goToCart(){
        cy.contains('a', 'Checkout').click()
        return new CartPage()
    }
}
export default ProductPage;