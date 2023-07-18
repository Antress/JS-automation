
const customerCarePageLocators = require('../сustomerCarePageLocators')

describe('customer care',() =>{
    beforeEach(()=>{
        cy.visit('https://parabank.parasoft.com/')
        cy.title().should('include','ParaBank');
        cy.get('[class = "contact"]').click()
    })

    it('Error messages are displayed after leaving all fields empty',() =>{
        cy.get(customerCarePageLocators.sendButton).click()
        cy.contains(customerCarePageLocators.nameFieldErrorMessage,'Name is required.').should('be.visible')
        cy.contains(customerCarePageLocators.emailFieldErrorMessage,'Email is required.').should('be.visible')
        cy.contains(customerCarePageLocators.phoneFieldErrorMessage,'Phone is required.').should('be.visible')
        cy.contains(customerCarePageLocators.descriptionErrorMessage,'Message is required.').should('be.visible')
    })

    it('Send message with unvalid data',() =>{
        cy.get(customerCarePageLocators.nameInput).type('12345')
        cy.get(customerCarePageLocators.emailInput).type('asdasd')
        cy.get(customerCarePageLocators.phoneInput).type('asdasdasdasd')
        cy.get(customerCarePageLocators.descriptionInput).type('////////')
        cy.get(customerCarePageLocators.sendButton).click()
        cy.contains(customerCarePageLocators.nameFieldErrorMessage,'Name is required.').should('be.visible')
        cy.contains(customerCarePageLocators.emailFieldErrorMessage,'Email is required.').should('be.visible')
        cy.contains(customerCarePageLocators,'Phone is required.').should('be.visible')
        cy.contains(customerCarePageLocators,'Message is required.').should('be.visible')
    })

    it('Send message with valid data',() =>{
        cy.get(customerCarePageLocators.nameInput).type('Tom Hardi')
        cy.get(customerCarePageLocators.emailInput).type('tomHard@gmail.com')
        cy.get(customerCarePageLocators.phoneInput).type('0000000000')
        cy.get(customerCarePageLocators.descriptionInput).type('Need help')
        cy.get(customerCarePageLocators.sendButton).click()
        cy.contains('A Customer Care Representative will be contacting you.').should('be.visible');
    })

    
})