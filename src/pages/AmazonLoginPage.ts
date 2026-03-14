export class AmazonLoginPage {
  visit() {
    cy.visit("/ap/signin");
  }

  getEmailField() {
    return cy.get("#ap_email");
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
