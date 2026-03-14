export class AmazonHomePage {
  visit() {
    cy.visit("/");
  }

  getLogo() {
    return cy.get("#nav-logo-sprites");
  }

  searchFor(product: string) {
    cy.get("#twotabsearchtextbox").clear().type(`${product}{enter}`);
  }

  getSearchResults() {
    return cy.get("span[data-component-type='s-search-results']");
  }
}
