/// <reference types="cypress" />

export class TangerineLoginPage {
  login(clientId: string, pin: string) {
    // Note: These selectors are based on standard banking forms.
    // If Tangerine changes their IDs, these will need updating.
    cy.get('input[id*="ACN"], input[type="text"]').first().type(clientId);
    
    // Depending on the flow, we might need to click "Next" or enter PIN directly
    cy.get('button').contains(/Next|Go|Log In/i).click();
  }

  getErrorMessage() {
    return cy.get('div[class*="FeedbackPanel"], .error-message, div[role="alert"]');
  }
}