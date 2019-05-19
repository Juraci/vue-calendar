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

  it('Makes the clicked day, the active day in the form submission', () => {
    cy.visit('/')
    cy.get('#active-day').contains('Monday')
    cy.get('.day.column.Friday').click()
    cy.get('#active-day').contains('Friday')
  })

  it('creates a new event on the selected day', () => {
    cy.get('.day.column.Tuesday').as('Tuesday')
    cy.get('.day.column.Tuesday .day-event').as('TuesdayEvents')

    cy.get('@Tuesday').click()
    cy.get('#calendar-entry input').type('Learn Vuex')
    cy.get('#calendar-entry .button').click()
    cy.get('@TuesdayEvents').should('have.length', 2)
    cy.get('@Tuesday').contains('Learn Vuex')
  })
})
