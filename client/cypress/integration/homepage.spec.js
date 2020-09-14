describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Displays the message in the list", () => {
    cy.contains("Swipe and Shop");
  });

  it("Contain a buy button", () => {
    cy.get("#buyButton").should("have.value", "Buy");
  });
});
