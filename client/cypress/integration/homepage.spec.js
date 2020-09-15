describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Displays the message in the list", () => {
    cy.contains("Swipe and Shop");
  });

  it("Contains a buy button", () => {
    cy.get("#buyButton").should("have.value", "Buy");
  });

  // it("Contains an image of an item for sale", () => {
  //   cy.get("#itemImage").should("have.attr", "href").and("include", "contact");
  // });

  it("Show sell message", () => {
    cy.get("#sellButton").click();
    cy.get("#buyButton").click();
    cy.contains("Swipe and Shop");
    cy.contains("Sell Page").should("not.exist");
  });
});
