import BasePage from './basePage'

class CustomerCarePage{

    get nameInput(){
        return cy.get('[id = "name"]')
    }

    get emailInput(){
        return cy.get('[id = "email"]')
    }

    get phoneInput(){
        return cy.get('[id = "phone"]')
    }

    get descriptionInput(){
        return cy.get('[id = "message"]')
    }

    get sendButton(){
        return cy.get('[value = "Send to Customer Care"]')
    }

    get nameFieldErrorMessage(){
        return cy.get('[id = "name.errors"]')
    }

    get emailFieldErrorMessage(){
        return cy.get('[id = "email.errors"]')
    }

    get phoneFieldErrorMessage(){
        return cy.get('[id = "phone.errors"]')
    }

    get descriptionErrorMessage(){
        return cy.get('[id = "message.errors"]')
    }

    clickOnTheSendButton(){
        this.sendButton.click()
        return this
    }

    nameFieldErrorMessageIsDisplayed(){
        cy.contains('[id = "name.errors"]','Name is required.').should('be.visible')
        return this
    }

    emailFieldErrorMessageIsDisplayed(){
        cy.contains('[id = "email.errors"]','Email is required.').should('be.visible')
        return this
    }

    phoneFieldErrorMessageIsDisplayed(){
        cy.contains('[id = "phone.errors"]','Phone is required.').should('be.visible')
        return this
    }

    descriptionFieldErrorMessageIsDisplayed(){
        cy.contains('[id = "message.errors"]','Message is required.').should('be.visible')
        return this
    }

    customerCareContactYouMessageIsDisplayed(){
        cy.contains('A Customer Care Representative will be contacting you.').should('be.visible');
        return this
    }
    
    writeName(name){
        this.nameInput.type(name)
        return this
    }

    writeEmail(email){
        this.emailInput.type(email)
        return this
    }

    writePhone(phone){
        this.phoneInput.type(phone)
        return this
    }

    writeDescription(description){
        this.descriptionInput.type(description)
        return this
    }

}

export default CustomerCarePage