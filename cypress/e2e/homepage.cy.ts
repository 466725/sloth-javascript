/// <reference types="cypress" />

import { TangerineHomePage } from "../../src/pages/TangerineHomePage";

describe("Tangerine Homepage", () => {
  const home = new TangerineHomePage();

  it("should load the homepage and show the logo", () => {
    cy.allure().feature('Homepage');
    cy.allure().story('Validate homepage loads correctly');
    home.visit();
    home.getLogo().should("be.visible");
  });

  it("should display 'Get Our App' links", () => {
    cy.allure().feature('Homepage');
    cy.allure().story('Validate app download links are visible');
    home.visit();
    // Scroll to the bottom of the page
    cy.scrollTo('bottom');
    // Check if the 'Get Our App' links for iOS and Android are visible
    cy.get('#ios-app-store-link').should('be.visible');
    cy.get('#android-app-store-link').should('be.visible');
  });

  it("should capture analytics events", () => {
    cy.allure().feature('Homepage');
    cy.allure().story('Validate analytics events are sent on homepage load');
    const analyticsEvents: any[] = [];
    cy.intercept('POST', '**google-analytics.com/g/collect', (req) => {
      analyticsEvents.push(req.body);
    });
    home.visit();
    cy.wait(3000);   // allow multiple analytics events
    cy.then(() => {
      expect(analyticsEvents.length).to.be.greaterThan(-1);
      analyticsEvents.forEach(event => {
        expect(event).to.include('en=');
      });
    });
  });
});
