/// <reference types="cypress" />

export class TangerineRegisterPage {
  visit() {
    cy.visit("/en/sign-up");
  }

  getConfirmationHeader() {
    // Verifies we are on the "Become a Client" page
    return cy.contains(/Become a Client|Sign Me Up/i);
  }
}