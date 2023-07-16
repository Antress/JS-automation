describe('customer care',() =>{
    beforeEach(()=>{
        cy.visit('https://parabank.parasoft.com/')
        cy.title().should('include','ParaBank');
        cy.get('[class = "contact"]').click()
    })

    it('Error messages are displayed after leaving all fields empty',() =>{
        cy.get('[value = "Send to Customer Care"]').click()
        cy.contains('[id = "name.errors"]','Name is required.').should('be.visible')
        cy.contains('[id = "email.errors"]','Email is required.').should('be.visible')
        cy.contains('[id = "phone.errors"]','Phone is required.').should('be.visible')
        cy.contains('[id = "message.errors"]','Message is required.').should('be.visible')
    })

    it('Send message with unvalid data',() =>{
        cy.get('[id = "name"]').type('12345')
        cy.get('[id = "email"]').type('asdasd')
        cy.get('[id = "phone"]').type('asdasdasdasd')
        cy.get('[id = "message"]').type('////////')
        cy.get('[value = "Send to Customer Care"]').click()
        cy.contains('[id = "name.errors"]','Name is required.').should('be.visible')
        cy.contains('[id = "email.errors"]','Email is required.').should('be.visible')
        cy.contains('[id = "phone.errors"]','Phone is required.').should('be.visible')
        cy.contains('[id = "message.errors"]','Message is required.').should('be.visible')
    })

    it('Send message with valid data',() =>{
        cy.get('[id = "name"]').type('Tom Hardi')
        cy.get('[id = "email"]').type('tomHard@gmail.com')
        cy.get('[id = "phone"]').type('0000000000')
        cy.get('[id = "message"]').type('Need help')
        cy.get('[value = "Send to Customer Care"]').click()
        cy.contains('A Customer Care Representative will be contacting you.').should('be.visible');
    })

    
})