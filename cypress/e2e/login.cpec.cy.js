describe('login site ',() => {
    beforeEach(()=>{
        cy.visit('https://parabank.parasoft.com/')
        cy.title().should('include','ParaBank');
    })

    it('login fields are displayed',() => {
        cy.get('input[name="username"]').should('be.visible')
        cy.get('input[name="password"]').should('be.visible')
    })

    it('login  with unvalid credentials',() => {
        cy.get('input[name="username"]').type('///')
        cy.get('input[name="password"]').type('///')
        cy.get('[type="submit"]').click()
        cy.get('[class="error"')
        .should('be.visible')
        .should('have.text','The username and password could not be verified.')
    })

    it('Error message is displayed after leaving all fields empty',() => {
        cy.get('[type="submit"]').click()
        cy.get('[class="error"')
        .should('be.visible')
        .should('have.text','Please enter a username and password.')
    })

    it('Error message is displayed after leaving password field empty',() => {
        cy.get('input[name="password"]').type('admin')
        cy.get('[type="submit"]').click()
        cy.get('[class="error"')
        .should('be.visible')
        .should('have.text','Please enter a username and password.')
    })

    it('Error message is displayed after leaving username field empty',() => {
    cy.get('input[name="username"]').type('admin')
    cy.get('[type="submit"]').click()
    cy.get('[class="error"')
    .should('be.visible')
    .should('have.text','Please enter a username and password.')
    })

    it('login  with valid credentials',() => {
        cy.get('input[name="username"]').type('admin')
        cy.get('input[name="password"]').type('admin')
        cy.get('[type="submit"]').click()
        cy.contains('h1.title', 'Accounts Overview').should('be.visible');
    })
})