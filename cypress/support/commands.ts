/// <reference types="cypress" />

Cypress.Commands.add("login", (email: string, password: string) => {
  cy.visit("/");
  cy.get("#nav-link-accountList").click();
  cy.get("#ap_email").type(email);
  cy.get("#continue").click();
  cy.get("#ap_password").type(password, { log: false });
  cy.get("#signInSubmit").click();
});
