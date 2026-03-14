import { AmazonHomePage } from "./AmazonHomePage";

export class AmazonRegisterPage {
  visit() {
    const home = new AmazonHomePage();
    home.visit();
    cy.get('body').then($body => {
      if ($body.find('#redir-modal').length > 0) {
        cy.get('#redir-modal').click({force: true});
      }
    });
    cy.get("#nav-link-accountList").click();
    cy.get("a[href*='/ap/register']").click();
  }

  getNameField() {
    return cy.get("#ap_customer_name");
  }

  getEmailField() {
    return cy.get("#ap_email");
  }

  getPasswordField() {
    return cy.get("#ap_password");
  }

  getContinueButton() {
    return cy.get("#continue");
  }

  submit() {
    this.getContinueButton().click();
  }

  getInlineAlerts() {
    return cy.get(".a-alert-inline");
  }

  register({ name, email, password }: { name: string; email: string; password: string }) {
    this.visit();
    this.getNameField().type(name);
    this.getEmailField().type(email);
    this.getPasswordField().type(password);
    this.submit();
  }
}
