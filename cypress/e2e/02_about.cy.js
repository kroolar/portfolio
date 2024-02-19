describe("about", () => {
  beforeEach(() => { cy.visit("localhost:3000") })

  it("should displays section elements", () => {
    cy.get(".avatar").should("have.attr", "src", "avatar.png")
    cy.get(".about__name").should("have.text", "ARTUR KROL")
    cy.get(".about__title").should("have.text", "RUBY ON RAILS DEVELOPER")
    cy.get(".about__section .section__title").should("have.text", "ABOUT")
    cy.get(".about__description").should("have.text", "Hello, I am Artur and I build the web things. I specialize in building websites and web applications. I currently work at Calligo but I also work as a freelancer helping others solve their problems. Let me know if you need any help.")
    cy.get(".about__button-icon").should("have.text", "handshake")
    cy.get(".about__button-text").should("have.text", "Say Hello")
  })
})
