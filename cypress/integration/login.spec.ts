/// <reference types="cypress" />

import { TangerineHomePage } from "../../src/pages/TangerineHomePage";
import { TangerineLoginPage } from "../../src/pages/TangerineLoginPage";
import { testCredentials } from "../../src/config";
import { should } from "chai";

describe("Tangerine Login Page", () => {
  const home = new TangerineHomePage();
  const login = new TangerineLoginPage();

  beforeEach(() => {
    home.visit();
    home.clickLogin();
  });

  it("Logging in input should be displayed", () => {
    login.login(
      testCredentials.invalidUser.clientId,
      testCredentials.invalidUser.pin
    )
  });
});
