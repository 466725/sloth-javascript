export class AmazonRegisterPage {
  visit() {
    cy.visit("/ap/register");
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
