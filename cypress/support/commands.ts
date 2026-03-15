/// <reference types="cypress" />

Cypress.Commands.add("login", (email: string, password: string) => {
  cy.visit("/");
  cy.get("#nav-link-accountList").should("be.visible").click();
  cy.get("#ap_email").should("be.visible").type(email);
  cy.get("#continue").click();
  cy.get("#ap_password").should("be.visible").type(password, { log: false });
  cy.get("#signInSubmit").click();
});
