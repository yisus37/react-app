
import App from "../../src/App"

describe('App.cy.js', () => {
  it('APP Prueba', () => {
    cy.mount(<App/>)
    cy.get('#inp1').type("jose")
    cy.get('#inp2').type("hernandez")
    cy.get('#btn').click()
    cy.get('#nom').contains("tu nombre es jose hernandez")
    
  })
})