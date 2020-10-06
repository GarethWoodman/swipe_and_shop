describe("Sell Items Page", () => {
  beforeEach(() => {
    cy.task("dropUsers");
    cy.task("dropItems");
    // cy.task("addItem", {
    //   user_id: "69",
    //   item_name: "Makers_test",
    //   description: "Makers Course",
    //   expiry_date: "6 months I reckon",
    //   picture:
    //     "https://coursereport-s3-production.global.ssl.fastly.net/rich/rich_files/rich_files/5940/s300/screen-shot-2020-03-30-at-14-28-10.png",
    //   price: 8000.0,
    // });

    cy.task("addUser", {
      email: "jag@jag.com",
      password: "12345",
      username: "Jag",
      real_name: "Jag Makers",
      picture: "jag.png",
      to_buy: [],
      to_sell: [],
    });

    cy.visit("http://localhost:3000");

    cy.get("#emailLogin").type("jag@jag.com");
    cy.get("#passwordLogin").type("12345");
    cy.get("#loginSubmit").click();

    cy.get("#sellButton").click();
    // cy.get("#itemUpload").click();
  });

  it("has item upload form", () => {
    const imageAddress = "https://static01.nyt.com/images/2019/04/02/science/28SCI-ZIMMER1/28SCI-ZIMMER1-videoSixteenByNineJumbo1600.jpg";
    cy.get("#item_name").type("Frog").should("have.value", "Frog");
    cy.get("#description")
      .type("Croaky")
      .should("have.value", "Croaky");
    cy.get("#price").type(10).should("have.value", "10");
    cy.get("#expiry_date").type("1 year").should("have.value", "1 year");
    cy.get("#picture")
      .type(imageAddress)
      .should("have.value", imageAddress);
    cy.get("#itemSubmit").click();

    cy.contains("Buy Page");

    cy.get("#itemName").contains("Frog");
    cy.get("#itemDescription").contains("Croaky");
    cy.get("#itemPrice").contains("10");
    cy.get("#itemPicture").should('have.attr', 'src', imageAddress)
  });
});
