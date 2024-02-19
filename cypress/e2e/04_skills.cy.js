describe("menu", () => {
  beforeEach(() => { cy.visit("localhost:3000") })

  it("should display section title", () => {
    cy.get(".skills .section__title").should("have.text", "SKILLS")
  })

  it("should display skills items", () => {
    const SKILLS = [
      "HTML", "CSS", "SASS", "TailwindCSS", "React", "Ruby",
      "Responsive Design", "Ruby on Rails", "Docker", "Git", "Nginx",
      "Linux", "Azure DevOps"
    ]

    SKILLS.map(skill => (
      cy.contains(skill).should("have.text", skill)
    ))
  })
})