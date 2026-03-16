/**
 * A custom command to conditionally find and click the OneTrust cookie banner.
 * This prevents tests from failing if the banner doesn't appear.
 */
Cypress.Commands.add("acceptCookies", () => {
  cy.get("body").then(($body) => {
    if ($body.find("#onetrust-accept-btn-handler:visible").length) {
      cy.get("#onetrust-accept-btn-handler:visible").click();
    }
  });
});