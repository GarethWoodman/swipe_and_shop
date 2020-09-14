describe("Homepage", () => {
  it("Displays the message in the list", () => {
    cy.visit("http://localhost:3000");

    cy.contains("Swipe and Shop");
  });
});
