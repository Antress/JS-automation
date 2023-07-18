
const loginPageLocators = require('../loginPageLocators')

describe('login site ',() => {    //Here you can see auto test for login page

    beforeEach(()=>{
        cy.visit('https://parabank.parasoft.com/')
        cy.title().should('include','ParaBank');
    })

    it('login fields are displayed',() => {
        cy.get(loginPageLocators.usernameInput).should('be.visible')
        cy.get(loginPageLocators.passwordInput).should('be.visible')
    })

    it('login  with unvalid credentials',() => {
        cy.getCredentials().then((credentials) => {
        cy.get(loginPageLocators.usernameInput).type(credentials.unvalid_username)
        cy.get(loginPageLocators.passwordInput).type(credentials.unvalid_password)
        cy.get(loginPageLocators.loginButton).click()
        cy.get(loginPageLocators.errorMessage)
        .should('be.visible')
        .should('have.text','An internal error has occurred and has been logged.')
        })
    })

    it('Error message is displayed after leaving all fields empty',() => {
        cy.get(loginPageLocators.loginButton).click()
        cy.get(loginPageLocators.errorMessage)
        .should('be.visible')
        .should('have.text','Please enter a username and password.')
    })

    it('Error message is displayed after leaving password field empty',() => {
        cy.getCredentials().then((credentials) => {
        cy.get(loginPageLocators.passwordInput).type(credentials.password)
        cy.get(loginPageLocators.loginButton).click()
        cy.get(loginPageLocators.errorMessage)
        .should('be.visible')
        .should('have.text','Please enter a username and password.')
        })
    })

    it('Error message is displayed after leaving username field empty',() => {
        cy.getCredentials().then((credentials) => {
        cy.get(loginPageLocators.usernameInput).type(credentials.username)
        cy.get(loginPageLocators.loginButton).click()
        cy.get(loginPageLocators.errorMessage)
        .should('be.visible')
        .should('have.text','Please enter a username and password.')
        })
    })

    it('login  with valid credentials',() => {
        cy.getCredentials().then((credentials) => {
        cy.get(loginPageLocators.usernameInput).type(credentials.username)
        cy.get(loginPageLocators.passwordInput).type(credentials.password)
        cy.get(loginPageLocators.loginButton).click()
        cy.contains('h1.title', 'Accounts Overview').should('be.visible');
        })
    })
  })