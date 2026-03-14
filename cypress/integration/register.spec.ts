/// <reference types="cypress" />

import { AmazonRegisterPage } from "../../src/pages/AmazonRegisterPage";

describe("Amazon Register New User", () => {
  const register = new AmazonRegisterPage();

  it("should show the registration form", () => {
    register.visit();
    register.getNameField().should("be.visible");
    register.getEmailField().should("be.visible");
  });

  it("should validate required fields", () => {
    register.visit();
    register.submit();
    register.getInlineAlerts().should("be.visible");
  });
});
