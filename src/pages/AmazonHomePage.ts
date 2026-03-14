export class AmazonHomePage {
  visit() {
    cy.visit("/");
  }

  getLogo() {
    return cy.get("#nav-logo-sprites");
  }

  searchFor(product: string) {
    cy.get("#twotabsearchtextbox").clear({ force: true }).type(`${product}{enter}`, { force: true });
  }

  getSearchResults() {
    return cy.get("span[data-component-type='s-search-results']");
  }
}
