/// <reference types="cypress" />

import { HomePage } from "../../src/pages/HomePage";
import { LoginPage } from "../../src/pages/LoginPage";
import { testCredentials } from "../../src/config";

describe("Tangerine Login Page", () => {
  const home = new HomePage();
  const login = new LoginPage();

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