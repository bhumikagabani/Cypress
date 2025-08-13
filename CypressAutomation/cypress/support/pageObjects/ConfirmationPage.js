class ConfirmationPage {
    submitFormDet() {
        cy.submitFormDetails()//custom command created in Support>Commands.js file also said as reusable code
        //cy.get("#country").type("India")
        //cy.get(".suggestions ul li a").click()
        //cy.get(".btn-success").click()
        
    }
    getAlertMessage(){
        return cy.get(".alert-success")
    }
}
export default ConfirmationPage;