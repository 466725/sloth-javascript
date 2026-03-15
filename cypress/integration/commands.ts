/// <reference types="cypress" />

import { AmazonLoginPage } from "../../src/pages/AmazonLoginPage";

Cypress.Commands.add("login", (email: string, password: string) => {
  const loginPage = new AmazonLoginPage();
  loginPage.login(email, password);
});