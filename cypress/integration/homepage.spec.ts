/// <reference types="cypress" />

import { TangerineHomePage } from "../../src/pages/TangerineHomePage";

describe("Tangerine Homepage", { tags: "@smoke" }, () => {
  const home = new TangerineHomePage();

  it("should load the homepage and show the logo", () => {
    home.visit();
    home.getLogo().should("be.visible");
  });
});
