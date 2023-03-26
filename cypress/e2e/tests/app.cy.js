/// <reference types="cypress" />

describe('App.cy.js', () => {

  beforeEach(() => {
    cy.visit("http://localhost:8007/")
   });
  it('APP Prueba', () => {
    cy.get('#inp1').type("jose")
    cy.get('#inp2').type("hernandez")
    cy.get('#btn').click()
    cy.get('#nom').contains("tu nombre es jose hernandez")
    
  })
})