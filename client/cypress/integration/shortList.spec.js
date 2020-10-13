describe("Logging In", () => {
  beforeEach(() => {
    cy.task("dropUsers");
    cy.task("dropItems");

    cy.task("addUser", {
      email: "gareth@jag.com",
      password: "12345",
      username: "Gareth2020",
      real_name: "Gareth",
      picture: "gareth.png",
      to_buy: [],
      to_sell: [],
    });

    cy.task("addUser", {
      email: "andrew@jag.com",
      password: "12345",
      username: "Andrew2020",
      real_name: "Andrew",
      picture: "andrew.png",
      to_buy: [],
      to_sell: [],
    });

    cy.visit("http://localhost:3000");

    cy.get("#emailLogin").type("gareth@jag.com");
    cy.get("#passwordLogin").type("12345");
    cy.get("#loginSubmit").click();

    cy.get("#sellButton").click();

    const imageAddress =
      "https://static01.nyt.com/images/2019/04/02/science/28SCI-ZIMMER1/28SCI-ZIMMER1-videoSixteenByNineJumbo1600.jpg";
    cy.get("#item_name").type("Frog").should("have.value", "Frog");
    cy.get("#description").type("Croaky").should("have.value", "Croaky");
    cy.get("#price").type(10).should("have.value", "10");
    cy.get("#expiry_date").type("1 year").should("have.value", "1 year");
    cy.get("#picture").type(imageAddress).should("have.value", imageAddress);
    cy.get("#itemSubmit").click();
  });

  it("shortlist is empty", () => {
    cy.get("#shortListButton").click();
    cy.get("#shortListItems").should("have.value", "");
  });
});