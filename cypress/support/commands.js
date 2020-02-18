Cypress.Commands.add('clickContinueButton', () => {
    cy.get('[data-testid="ACTION_BUTTON"]').contains('Continue').click();
});

Cypress.Commands.add('invalidLoginInputs', () => {
    cy.get('[name="email_or_mobile_number"]').type('123@test.com')
    cy.clickContinueButton();
    cy.get('[name="user_pass"]').type('test1234')
    cy.clickContinueButton();
});