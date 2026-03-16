/// <reference types="cypress" />

export class TangerineLoginPage {
  login(clientId: string, pin: string) {
    return cy.get('input[id="login-user-id-input"]').should("be.visible");
  }
}