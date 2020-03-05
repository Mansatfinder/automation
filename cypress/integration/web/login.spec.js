// ***********************************************
// These tests are based on finder's user login feature
// which check the basic validation in multiple browsers (chrome, firefox, edge) 
// by submitting an empty login form and with wrong login details.
// ***********************************************

describe("Validate user login - Desktop", function() {
    this.beforeEach(() => {
        cy.visit('/user-profile/sign-in');
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