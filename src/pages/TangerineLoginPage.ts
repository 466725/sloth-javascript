/// <reference types="cypress" />

export class TangerineLoginPage {
  login(clientId: string, pin: string) {
    // Note: These selectors are based on standard banking forms.
    // This is a multi-step login.
    // Step 1: Enter Username/Card Number
    // Targeted selector to avoid typing in the header "Search" bar
    cy.get('input[id*="ACN"], input[name*="Login"], input[placeholder*="Client"]').first().type(clientId);
    cy.get('button').contains(/Next|Go|Log In/i).click();

    // Step 2: Enter PIN on the next screen (Conditional)
    // If the username is invalid, the app might show an error immediately on Step 1.
    // We wait briefly for UI to settle, then check if password field exists.
    cy.wait(1000); 
    cy.get("body").then(($body) => {
      if ($body.find('input[type="password"]').length > 0) {
        cy.get('input[type="password"]').type(pin);
        cy.get('button').contains(/Next|Go|Log In/i).click();
      } else {
        cy.log("Password field not found. Assuming invalid username flow.");
      }
    });
  }

  getErrorMessage() {
    // Targeted selector to avoid matching hidden <noscript> tags containing generic "error" or "check" text
    return cy.get('div, p, span, h2, h3, h4').contains(/We can't find|PIN|Invalid|Issue/i);
  }
}