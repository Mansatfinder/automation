// ***********************************************
// These tests are the common steps for both mobile and desktop tests.
// ***********************************************

// Submit empty login form
Cypress.Commands.add('clickContinueButton', () => {
    cy.get('[data-testid="ACTION_BUTTON"]').contains('Continue').click();
});

// Submit login form with a wrong login details
Cypress.Commands.add('invalidLoginInputs', () => {
    cy.get('[name="email_or_mobile_number"]').type('123@test.com');
    cy.clickContinueButton();
    cy.get('[name="user_pass"]').type('test1234');
    cy.clickContinueButton();
});