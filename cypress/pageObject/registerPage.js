import BasePage from './basePage'

class RegisterPage extends BasePage{   

    get firstNameInput(){
        return cy.get('input[name="customer.firstName"]')
    }

    get lastNameInput(){
        return cy.get('input[name="customer.lastName"]')
    }

    get addressInput(){
        return cy.get('input[name="customer.address.street"]')
    }

    get cityInput(){
        return cy.get('input[name="customer.address.city"]')
    }

    get stateInput(){
        return cy.get('input[name="customer.address.state"]')
    }

    get zipCodeInput(){
        return cy.get('input[name="customer.address.zipCode"]')
    }

    get phoneInput(){
        return cy.get('input[name="customer.phoneNumber"]')
    }

    get ssnInput(){
        return cy.get('input[name="customer.ssn"]')
    }

    get usernameInput(){
        return cy.get('input[name="customer.username"]')
    }

    get passwordInput(){
        return cy.get('input[name="customer.password"]')
    }

    get confirmInput(){
        return cy.get('input[name="repeatedPassword"]')
    }

    get registerButton(){
        return cy.get('[type="submit"]')
    }

    get firstNameInputError(){
        return cy.get('#customer.firstName.errors')  
    }

    get lastNameInputError(){
        return cy.get('#customer.lastName.errors')
    }

    get addressInputError(){
        return cy.get('#customer.address.street.errors')
    }

    get cityInputError(){
        return cy.get('#customer.address.city.errors')
    }

    get stateInputError(){
        return cy.get('#customer.address.state.errors')
    }

    get zipCodeInputError(){
        return cy.get('#customer.address.zipCode.errors')
    }

    get phoneInputError(){
        return cy.get('#')
    }

    get ssnInputError(){
        return cy.get('#customer.ssn.errors')
    }

    get usernameInputError(){
        return cy.get('#customer.username.errors')
    }

    get passwordInputError(){
        return cy.get('#customer.password.errors')
    }

    get confirmInputError(){
        return cy.get('#repeatedPassword.errors')
    }

    writeFirstName(firstName){
        this.firstNameInput.type(firstName)
        return this
    }

    writeLastName(lastName){
        this.lastNameInput.type(lastName)
        return this
    }

    writeAddress(address){
        this.addressInput.type(address)
        return this
    }

    writeCity(city){
        this.cityInput.type(city)
        return this
    }

    writePhone(phone){
        this.phoneInput.type(phone)
        return this
    }

    writeSSN(ssn){
        this.ssnInput.type(ssn)
        return this
    }

    writeUsername(username){
        this.usernameInput.type(username)
        return this
    }

    writePassword(password){
        this.passwordInput.type(password)
        return this
    }

    clickOnTheRegistrationButton(){
        this.registerButton.click()
        return this
    }

    writePassword(confirmPassword){
        this.confirmInput.type(confirmPassword)
        return this
    }

    allErrorMessagesIsDisplayed(){
        this.firstNameInputError.should('be.visible')
        this.lastNameInputError.should('be.visible')
        this.addressInputError.should('be.visible')
        this.cityInputError.should('be.visible')
        this.ssnInputError.should('be.visible')
        this.stateInputError.should('be.visible')
        this.zipCodeInputError.should('be.visible')
        this.phoneInputError.should('be.visible')
        this.ssnInputError.should('be.visible')
        this.usernameInputError.should('be.visible')
        this.passwordInputError.should('be.visible')
        this.confirmInputError.should('be.visible')
    }

    registrationPageTitleIsDisplayed(){
        return cy.tytle().should('include','Signing up is easy!')
    } 

}

export default RegisterPage