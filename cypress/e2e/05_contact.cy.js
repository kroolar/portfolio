describe("menu", () => {
  beforeEach(() => { cy.visit("localhost:3000") })

  it("should display section title", () => {
    cy.get(".contact .section__title").should("have.text", "CONTACT")
  })

  it("should display email elements", () => {
    cy.get(".contact__item--Email .icon").should("have.text", "alternate_email")
    cy.get(".contact__item--Email .text").should("have.text", "Email")
    cy.get(".contact__item--Email .link").should("have.text", "kroolar@gmail.com")
    cy.get(".contact__item--Email .link").should("have.attr", "href", "mailto:kroolar@gmail.com")
  })

  it("should display medium elements", () => {
    cy.get(".contact__item--Medium .icon").should("have.text", "article")
    cy.get(".contact__item--Medium .text").should("have.text", "Medium")
    cy.get(".contact__item--Medium .link").should("have.text", "@kroolar")
    cy.get(".contact__item--Medium .link").should("have.attr", "href", "https://medium.com/@kroolar")
  })

  it("should display github elements", () => {
    cy.get(".contact__item--Github .icon").should("have.text", "folder")
    cy.get(".contact__item--Github .text").should("have.text", "Github")
    cy.get(".contact__item--Github .link").should("have.text", "kroolar")
    cy.get(".contact__item--Github .link").should("have.attr", "href", "https://github.com/kroolar")
  })
})
