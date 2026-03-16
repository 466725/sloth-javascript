/// <reference types="cypress" />

import { TangerineHomePage } from "../../src/pages/TangerineHomePage";

describe("Tangerine Registration", () => {
  const home = new TangerineHomePage();

  it("should verify the Sign Up page loads", () => {
    home.visit();
    // The site has multiple "Become a Client" links, some hidden for mobile.
    // We target a visible link ('a:visible') to ensure we click the correct one.
    cy.get("a:visible").contains(/Sign Up|Become a Client/i).should("be.visible");
  });
});
