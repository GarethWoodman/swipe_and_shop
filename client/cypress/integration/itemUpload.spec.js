describe("Sell Items Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#sellButton").click();
    cy.get("#itemUpload").click();
  });

  it("has item upload form", () => {
    const imageAddress =
      "https://static01.nyt.com/images/2019/04/02/science/28SCI-ZIMMER1/28SCI-ZIMMER1-videoSixteenByNineJumbo1600.jpg";
    cy.get("#itemUploadName").type("Frog").should("have.value", "Frog");
    cy.get("#itemUploadDescription")
      .type("Croaky")
      .should("have.value", "Croaky");
    cy.get("#itemUploadPrice").type("10").should("have.value", "10");
    cy.get("#itemUploadExpiry").type("1 year").should("have.value", "1 year");
    cy.get("#itemUploadPicture")
      .type(imageAdress)
      .should("have.value", imageAddress);
  });
});
