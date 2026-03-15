/// <reference types="cypress" />

import { TangerineHomePage } from "../../src/pages/TangerineHomePage";
import { TangerineLoginPage } from "../../src/pages/TangerineLoginPage";
import { testCredentials } from "../../src/config";

describe("Tangerine Login Page", () => {
  const home = new TangerineHomePage();
  const login = new TangerineLoginPage();

  beforeEach(() => {
    home.visit();
    home.clickLogin();
  });

  it("should show an error when logging in with invalid credentials", () => {
    login.login(
      testCredentials.invalidUser.clientId,
      testCredentials.invalidUser.pin
    );
    login.getErrorMessage().should("be.visible");
  });
});
