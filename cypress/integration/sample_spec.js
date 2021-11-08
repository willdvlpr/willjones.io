describe("My First Test", () => {
  it("Does not do much!", () => {
    cy.visit("https://www.willjones.io");
    cy.contains("Software Engineer.");
    cy.contains("contact").click();
  });
});
