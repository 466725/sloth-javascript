/// <reference types="cypress" />

import { TangerineHomePage } from "../../src/pages/TangerineHomePage";
import { TangerineLoginPage } from "../../src/pages/TangerineLoginPage";
import { testCredentials } from "../../src/config";

describe("Tangerine Login Page", () => {
  const home = new TangerineHomePage();
  const login = new TangerineLoginPage();

  beforeEach(() => {
    home.visit();
    // Temporary fix: Selector updated from "Log Me In" to "Log In" based on current site text
    cy.contains("Log In").should("be.visible").click();
  });

  it("should show an error when logging in with invalid credentials", () => {
    login.login(
      testCredentials.invalidUser.clientId,
      testCredentials.invalidUser.pin
    );
    // The specific error classes (FeedbackPanel etc) might have changed.
    // Checking for visible text is more robust.
    cy.contains(/Invalid|Error|Check your/i).should("be.visible");
  });
});
