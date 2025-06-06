describe('Skills', () => {
  it('Should display all skills', () => {

    cy.intercept('https://sunny-biard.github.io/Portfolio/data/testSkills.json').as('requeteTestSkills')
    cy.intercept('https://sunny-biard.github.io/Portfolio/data/devSkills.json').as('requeteDevSkills')
    cy.intercept('https://sunny-biard.github.io/Portfolio/data/otherSkills.json').as('requeteOtherSkills')

    cy.visit('https://sunny-biard.github.io//Portfolio/#skills')

    cy.wait('@requeteTestSkills')
    cy.wait('@requeteDevSkills')
    cy.wait('@requeteOtherSkills')
  })
})