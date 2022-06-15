
context('Tourwriter login', () => {
    it('forgot password', () => {
        cy.visit('https://staging.tourwriter.com/home')
        cy.get('[data-test="forgot_password"]').click()         
          // can type text and submit
          cy.get('[name="email"]').type('hamrutha+staging@tourwriter.com').click()
          // type "email" + press reset password
          cy.get('[data-test="submit"]').click()
          cy.contains('Return to login page').click()
    })
})