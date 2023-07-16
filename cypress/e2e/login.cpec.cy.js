describe('login site ',() => {
    before(()=>{
        cy.visit('https://parabank.parasoft.com/')
        cy.title().should('include','ParaBank');
    })


    it('login fields are displayed',() => {
        cy.get('input[name="username"]').should('be visible')
        cy.get('input[name="password"]').should('be visible')
    })

    it('login  with unvalid credentials',() => {
        cy.get('input[name="username"]').type('///')
        cy.get('input[name="password"]').type('///')
        cy.get('[class="error"')
        .should('be visible')
        .should('have text','The username and password could not be verified.')
    })

    after(() => {
        cy.close()
    })
})