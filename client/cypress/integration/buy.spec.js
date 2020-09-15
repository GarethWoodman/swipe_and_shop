describe("Buy Items Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Show buy message", () => {
    cy.contains("Buy Page");
  })

  it("Show item name", () => {
    cy.contains("apple");
  })
})