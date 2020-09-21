describe("Logging In", () => {
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

  it("Sign up and login", () => {
    cy.contains("Swipe and Shop");

    cy.contains("Buy Page").should("not.exist");
    cy.get("#buyButton").should("not.exist");
    cy.get("#sellButton").should("not.exist");

    cy.get("#yesButton").should("not.exist");
    cy.get("#noButton").should("not.exist");
    cy.get("#itemPicture").should("not.exist");
    cy.get("#itemPrice").should("not.exist");
    cy.get("#itemDescription").should("not.exist");
    cy.get("#itemName").should("not.exist");

    cy.get("#signUp");
    cy.get("#emailLogin");
    cy.get("#passwordLogin");
  });
});
