// ***********************************************
// This tests are for mobile viewport which check the basic validation 
// by submitting an empty login form and with wrong login details
// ***********************************************

describe("Validate user login - Mobile", function() {
    this.beforeEach(() => {
        cy.visit('/user-profile/sign-in');
        //open browser in iphoneX viewport
        cy.viewport(375, 812);
    });
    it('should display error message when login form is submit with empty fields', () => {
        cy.clickContinueButton();
        cy.get('[date-testid="VALIDATION_ERROR_MESSAGE"]').should('be.visible');
    });
    it('should not allow to login with invalid login details', () => {
        cy.invalidLoginInputs();
        cy.get('.luna-form__alert--error').should('be.visible');
    });
});