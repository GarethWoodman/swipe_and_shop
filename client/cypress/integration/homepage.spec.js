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

    cy.task("addItem", {
      user_id: "70",
      item_name: "Jigglypluff",
      description: "Sings beautifully",
      expiry_date: "never",
      picture: "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Pok%C3%A9mon_Jigglypuff_art.png/220px-Pok%C3%A9mon_Jigglypuff_art.png",
      price: 5,
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

  it("Contains first item details", () => {
    cy.get('#itemName').contains('Makers_test')
    cy.get('#itemDescription').contains('Makers Course')
    cy.get('#itemPrice').contains(8000.0)
    cy.get('#itemPicture').should('have.attr', 'src', 'https://coursereport-s3-production.global.ssl.fastly.net/rich/rich_files/rich_files/5940/s300/screen-shot-2020-03-30-at-14-28-10.png')
  })

  it("Clicks yes/no and gets second item details", () => {
    cy.get('#yesButton').click();
    cy.get('#itemName').contains('Jigglypluff')
    cy.get('#itemDescription').contains('Sings beautifully')
    cy.get('#itemPrice').contains(5)
    cy.get('#itemPicture').should('have.attr', 'src', 'https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Pok%C3%A9mon_Jigglypuff_art.png/220px-Pok%C3%A9mon_Jigglypuff_art.png')
  })
});
