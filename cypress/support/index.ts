// Import custom commands that are shared across all tests.
import "./commands";

// You can add global configuration and behavior that modifies Cypress here.
// For example, you can set default timeouts or register event handlers.

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
