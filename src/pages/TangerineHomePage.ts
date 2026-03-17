/// <reference types="cypress" />

export class TangerineHomePage {
  private readonly homePath = "/";
  private readonly logoSelector = 'img[alt="Tangerine"]';
  private readonly loginTextPattern = /Log In|Log Me In/i;

  visit() {
    cy.visit(this.homePath); // Navigate to the base URL
    cy.acceptCookies(); // Handle the cookie banner using our custom command
  }

  getLogo() {
    // Checks for the Tangerine logo image
    return cy.get(this.logoSelector);
  }

  clickLogin() {
    // Updated to match "Log In" (current) or "Log Me In" (legacy)
    cy.contains(this.loginTextPattern).click();
  }
}