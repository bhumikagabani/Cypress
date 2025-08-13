class HomePage {
    goTO(url){
        cy.visit(url)
    }
    login(username,password) {
        cy.get("#username").type(username)//gettiing locatorr and typing username as rahulshettyacademy type("rahulsheety") to enter but for fixtures use data.username 
        cy.get("#password").type(password)
        cy.contains("Sign In").click()
    }
}
export default HomePage;