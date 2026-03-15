/// <reference types="cypress" />

import { AmazonLoginPage } from "../../src/pages/AmazonLoginPage";
import { testCredentials } from "../../src/config";

describe("Amazon Login Page", () => {
  const login = new AmazonLoginPage();

  it("should display the login form", () => {
    login.visit();
    login.getEmailField().should("be.visible");
  });

  it("should show an error with invalid credentials", () => {
    login.login(
      testCredentials.invalidUser.email,
      testCredentials.invalidUser.password
    );
    login.getErrorMessage().should("be.visible");
  });
});
