import { AmazonHomePage } from "./AmazonHomePage";

export class AmazonLoginPage {
  visit() {
    const home = new AmazonHomePage();
    home.visit();
    cy.get('body').then($body => {
      if ($body.find('#redir-modal').length > 0) {
        cy.get('#redir-modal').click({ force: true });
      }
    });
    cy.get("#nav-link-accountList").click();
    cy.contains("Sign in").click();
  }

  getEmailField() {
    return cy.get("input[type='email']");
  }

  getPasswordField() {
    return cy.get("#ap_password");
  }

  submit() {
    cy.get("#signInSubmit").click();
  }

  login(email: string, password: string) {
    this.visit();
    this.getEmailField().type(email);
    cy.get("#continue").click();
    this.getPasswordField().type(password, { log: false });
    this.submit();
  }

  getErrorMessage() {
    return cy.get("#auth-error-message-box");
  }
}
