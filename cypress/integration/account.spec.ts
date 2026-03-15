/// <reference types="cypress" />

import { testCredentials } from "../../src/config";

// Skipping this suite because we don't have valid Tangerine bank credentials
describe.skip("User Account Area (Requires Login)", () => {
  beforeEach(() => {
    // Use the custom command to log in before each test in this suite.
    // This separates the login action from the test's main focus.
    cy.login(testCredentials.user.clientId, testCredentials.user.pin);
    // Note: Amazon's bot detection may still block this. For a real project,
    // a programmatic login (cy.request) is often more stable and faster.
  });

  it("should be able to view the account page after logging in", () => {
    // Now that we are logged in, we can proceed with the test.
    cy.contains("Insights").should("be.visible");
  });
});