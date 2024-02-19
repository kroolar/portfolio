describe("experience", () => {
  beforeEach(() => { cy.visit("localhost:3000") })

  it("should display section title", () => {
    cy.get(".experience .section__title").should("have.text", "EXPERIENCE")
  })

  it("should display Calligo section", () => {
    cy.get(".experience--Calligo .experience__icon").should("have.text", "cloud")
    cy.get(".experience--Calligo .experience__link").should("have.text", "Calligo")
    cy.get(".experience--Calligo .experience__link").should("have.attr", "href", "https://www.calligo.io/")
    cy.get(".experience--Calligo .experience__dates").should("have.text", "2020 - Present")
    cy.get(".experience--Calligo .experience__title").should("have.text", "Full Stack RoR Developer")
  })

  it("should display Vybbe section", () => {
    cy.get(".experience--Vybbe .experience__icon").should("have.text", "add_reaction")
    cy.get(".experience--Vybbe .experience__link").should("have.text", "Vybbe")
    cy.get(".experience--Vybbe .experience__link").should("have.attr", "href", "https://www.vybbe.com/")
    cy.get(".experience--Vybbe .experience__dates").should("have.text", "2019 - 2020")
    cy.get(".experience--Vybbe .experience__title").should("have.text", "Full Stack RoR Developer")
  })

  it("should display Freelancer section", () => {
    cy.get(".experience--Freelancer .experience__icon").should("have.text", "explore")
    cy.get(".experience--Freelancer .experience__link").should("have.text", "Freelancer")
    cy.get(".experience--Freelancer .experience__link").should("have.attr", "href", "/")
    cy.get(".experience--Freelancer .experience__dates").should("have.text", "2018 - Present")
    cy.get(".experience--Freelancer .experience__title").should("have.text", "Full Stack Developer")
  })
})
