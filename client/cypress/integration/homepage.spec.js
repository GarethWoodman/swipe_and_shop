describe("Homepage", () => {
  beforeEach(() => {
    cy.task("dropItems");
    cy.task("addItem", {
      user_id: "69",
      item_name: "Makers_test",
      description: "Makers Course",
      expiry_date: "6 months I reckon",
      picture:
        "https://coursereport-s3-production.global.ssl.fastly.net/rich/rich_files/rich_files/5940/s300/screen-shot-2020-03-30-at-14-28-10.png",
      price: 8000.0,
    });
    cy.visit("http://localhost:3000");
  });

  it("Displays the message in the list", () => {
    cy.contains("Swipe and Shop");
    cy.contains("Buy Page");
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
