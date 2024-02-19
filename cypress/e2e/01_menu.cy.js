describe("menu", () => {
  beforeEach(() => { cy.visit("localhost:3000") })

  it("should displays menu items", () => {
    cy.get(".menu__item--ABOUT").should("have.text", "ABOUT")
    cy.get(".menu__item--ABOUT").should("have.attr", "href", "#ABOUT")

    cy.get(".menu__item--EXPERIENCE").should("have.text", "EXPERIENCE")
    cy.get(".menu__item--EXPERIENCE").should("have.attr", "href", "#EXPERIENCE")

    cy.get(".menu__item--SKILLS").should("have.text", "SKILLS")
    cy.get(".menu__item--SKILLS").should("have.attr", "href", "#SKILLS")

    cy.get(".menu__item--CONTACT").should("have.text", "CONTACT")
    cy.get(".menu__item--CONTACT").should("have.attr", "href", "#CONTACT")
  })

  it("should scroll to about section", () => {
    cy.get(".menu__item--ABOUT").click()

    cy.location().should((location) => {
      expect(location.hash).to.eq("#ABOUT")
    })
  })

  it("should scroll to experience section", () => {
    cy.get(".menu__item--EXPERIENCE").click()

    cy.location().should((location) => {
      expect(location.hash).to.eq("#EXPERIENCE")
    })
  })


  it("should scroll to skills section", () => {
    cy.get(".menu__item--SKILLS").click()

    cy.location().should((location) => {
      expect(location.hash).to.eq("#SKILLS")
    })
  })

  it("should scroll to contact section", () => {
    cy.get(".menu__item--CONTACT").click()

    cy.location().should((location) => {
      expect(location.hash).to.eq("#CONTACT")
    })
  })
})
