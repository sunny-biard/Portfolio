describe('Projects', () => {
  it('Should display all projects', () => {

    cy.intercept('https://sunny-biard.github.io/Portfolio/data/portfolio.json').as('requetePortfolio')

    cy.visit('https://sunny-biard.github.io//Portfolio/#projects')

    cy.wait('@requetePortfolio')
  })
})