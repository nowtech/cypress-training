///<reference types="cypress"/>
context('Tourwriter login', () => {
    it('verify title of the page', () => {
    cy.visit('https://staging.tourwriter.com/home')
     // can type text and submit
     cy.get('#email').type('hamrutha+staging@tourwriter.com').click()
     cy.get('#password').type('123456789!')
     cy.get('[data-test="submit"]').click()
     cy.get(':nth-child(1) > [data-testid="Card-root"]').click()
     cy.get('.jss401 > .jss24').click()
     cy.contains('Logout').click({force: true});
     
     
 })
})     
