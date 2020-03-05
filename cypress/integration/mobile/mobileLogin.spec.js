describe("Validate user login", function() {
    this.beforeEach(() => {
        cy.visit('/user-profile/sign-in');
        cy.viewport(375, 812);
        //open browser in iphoneX viewport
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