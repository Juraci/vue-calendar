// https://docs.cypress.io/api/introduction/api.html

describe('Calendar tasks', () => {
  beforeEach(() => cy.visit('/'))

  it('makes the clicked day, the active day in the form submission', () => {
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

  it('display an error when trying to add an empty event', () => {
    cy.get('#calendar-entry .button').click()

    cy.get('.error-message').contains('You must type something first!')
  })

  it('edit an event', () => {
    cy.get('.day.column.Tuesday').as('Tuesday')
    cy.get('.day.column.Tuesday .day-event').first().as('Event')

    cy.get('@Tuesday').click('top')

    cy.get('@Event').find('.edit-event').click()
    cy.get('@Event').find('input').type('Updated task')
    cy.get('@Event').find('.save').click()
    cy.get('@Event').contains('Updated task')
  })
})
