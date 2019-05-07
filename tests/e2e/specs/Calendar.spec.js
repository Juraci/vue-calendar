// https://docs.cypress.io/api/introduction/api.html

describe('Calendar tasks', () => {
  it('Has a week row', () => {
    cy.visit('/')
    cy.get('#calendar-week').should('be.visible')
  })

  it('Has 7 days', () => {
    cy.visit('/')
    cy.get('.day.column').should('have.length', 7)
  })

  it('Has a submit form', () => {
    cy.visit('/')
    cy.get('#calendar-entry').should('be.visible')
  })
})
