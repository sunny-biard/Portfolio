describe('Navbar', () => {
  it('Should display the navbar and allow user to access directly to different sections', () => {
    cy.visit('https://sunny-biard.github.io/Portfolio/')

    cy.get('a[href="#home"]').click();

    cy.url().should('eq','https://sunny-biard.github.io/Portfolio/#home')

    cy.get('a[href="#about"]').click();

    cy.url().should('eq','https://sunny-biard.github.io/Portfolio/#about')

    cy.get('a[href="#skills"]').click();

    cy.url().should('eq','https://sunny-biard.github.io/Portfolio/#skills')

    cy.get('a[href="#projects"]').click();

    cy.url().should('eq','https://sunny-biard.github.io/Portfolio/#projects')

    cy.get('a[href="#contact"]').click();

    cy.url().should('eq','https://sunny-biard.github.io/Portfolio/#contact')
  })
})