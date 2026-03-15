// Import custom commands that are shared across all tests.
import "./commands";

// You can add global configuration and behavior that modifies Cypress here.
// For example, you can set default timeouts or register event handlers.

// Prevent Cypress from failing tests when the application throws an error
// unrelated to the test logic (e.g. 3rd party scripts on the bank website)
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});

// Example: Add a custom command type definition.
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Login via the UI (used in tests that require authentication).
       */
      login(email: string, password: string): Chainable<void>;
    }
  }
}
