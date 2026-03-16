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

  it("Logging in input should be displayed", () => {
    cy.allure().feature('Login');
    cy.allure().story('Validate login page displays input fields');

    // Use simple step
    cy.allure().step('Enter login credentials', true);
    login.login(
      testCredentials.invalidUser.clientId,
      testCredentials.invalidUser.pin
    );
  });
});