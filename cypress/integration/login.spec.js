import { TIMEOUT } from "dns"

describe('my first test suit',function(){

  it('verify tittle of the page',function(){
    
    cy.visit('https://staging.tourwriter.com')
    //cy.title().should('eq','staging.tourwriter')
    
    cy.get('#email')
      .type('lohitha.yaralgadda+expert1@tourwriter.com')
    cy.get('#password')
      .type('12345678!')
    cy.wait(3000)
    cy.get('[data-test="submit"]').click()
    cy.wait(3000)
  
    cy.get(':nth-child(1) > [data-testid="Card-root"]').click()
    //cy.get(["type=button"]).click()
    cy.wait(2000)
    cy.get('.jss401').click()
    cy.wait(2000)
    cy.get('.jss407').click()

    cy.get('#email').type('lohitha.yaralgadda+expert1@tourwriter.com')
    cy.get('#password').type('12345678!')
    cy.wait(3000)
    cy.get('[data-test="submit"]').click()
    cy.wait(3000)
  
    cy.get(':nth-child(2) > [data-testid="Card-root"]').click()
    cy.wait(2000)
    cy.get('.jss873').click()
    cy.wait(2000)
    cy.get('.jss879').click()

    cy.get('#email').type('lohitha.yaralgadda+expert1@tourwriter.com')
    cy.get('#password').type('1234567!') 
    cy.get('[data-test="submit"]').click()
    // should show email and password is incorrect password
      .wait(5000)
    cy.get('#password').type('1234567!').clear()
      .wait(3000)
      .type('12345678!')
      .click()
    cy.get('[data-test="submit"]').click()
    cy.wait(3000)

    cy.get(':nth-child(2) > [data-testid="Card-root"]').click()
    cy.wait(2000)
    cy.get('.jss873').click()
    cy.wait(2000)
    cy.get('.jss879').click()

    cy.get('#email').type('lohitha.yaralgadda+expert1@tourwriter.com')
    cy.get('#password').type('1234567!').clear()
    cy.get('[data-test="forgot_password"]').click()
    cy.get('[data-test="forgot_password"]')

  })
})