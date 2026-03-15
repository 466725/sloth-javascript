/// <reference types="cypress" />

import { TangerineHomePage } from "../../src/pages/TangerineHomePage";

describe("Tangerine Registration", () => {
  const home = new TangerineHomePage();

  it("should verify the Sign Up page loads", () => {
    home.visit();
    cy.contains(/Sign Up|Become a Client/i).click();
    cy.url().should("include", "sign-up");
    cy.contains("Become a Client").should("be.visible");
  });
});
