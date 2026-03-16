/// <reference types="cypress" />

import { TangerineHomePage } from "../../src/pages/TangerineHomePage";

describe("Tangerine Homepage", { tags: "@smoke" }, () => {
  const home = new TangerineHomePage();

  it("should load the homepage and show the logo", () => {
    home.visit();
    home.getLogo().should("be.visible");
  });

  it("Google Analytics should load", () => {
    cy.intercept('fetch', 'www.google-analytics.com/**').as("googleAnalytics");
    cy.visit("/");
    cy.wait("@googleAnalytics")
      .its("response.statusCode")
      .should("eq", 204);
  });
});
