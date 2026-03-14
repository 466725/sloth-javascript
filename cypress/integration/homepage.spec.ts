/// <reference types="cypress" />

import { AmazonHomePage } from "../../src/pages/AmazonHomePage";

describe("Amazon Homepage", () => {
  const home = new AmazonHomePage();

  beforeEach(() => {
    home.visit();
  });

  it("should load the homepage", () => {
    home.getLogo().should("be.visible");
  });

  it("should be able to search for a product", () => {
    home.searchFor("cypress");
    home.getSearchResults().should("be.visible");
  });
});
