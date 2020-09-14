describe("Sell Items Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#sellButton").click();
  });

  it("Show sell message", () => {
    cy.contains("Sell Page");
  });
});
