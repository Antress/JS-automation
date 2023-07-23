import BasePage from './basePage';

class RegisterPage extends BasePage {

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
        return cy.get('[type="submit"][value="Register"]')
    }

    get firstNameInputError(){
        return cy.get('input[name="customer.firstName"]')
    }
    
    get lastNameInputError(){
        return cy.get('input[name="customer.lastName"]')
    }

    get addressInputError(){
        return cy.get('input[name="customer.address"]')
    }

    get cityInputError(){
        return cy.get('input[name="customer.city"]')
    }

    get stateInputError(){
        return cy.get('input[name="customer.address.state"]')
    }

    get zipCodeInputError(){
        return cy.get('input[name="customer.address.zipCode"]')
    }

    get phoneInputError(){
        return cy.get('#')
    }

    get ssnInputError(){
        return cy.get('input[name="customer.ssn"]')
    }

    get usernameInputError(){
        return cy.get('input[name="customer.username"]')
    }

    get passwordInputError(){
        return cy.get('input[name="customer.password"]')
    }

    get confirmInputError(){
        return cy.get('input[name="repeatedPassword"]')
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

    writeConfirmPassword(confirmPassword){
        this.confirmInput.type(confirmPassword)
        return this
    }

    allErrorMessagesIsDisplayed(){
        this.registerButton.click()
        this.firstNameInputError.should('be.visible')
        this.lastNameInputError.should('be.visible')
        this.addressInputError.should('be.visible')
        this.cityInputError.should('be.visible')
        this.stateInputError.should('be.visible')
        this.zipCodeInputError.should('be.visible')
        this.phoneInputError.should('be.visible')
        this.ssnInputError.should('be.visible')
        this.usernameInputError.should('be.visible')
        this.passwordInputError.should('be.visible')
        this.confirmInputError.should('be.visible')
    }

    registrationPageTitleIsDisplayed() {
        return cy.contains('Signing up is easy!').should('include', 'Signing up is easy!');
    } 

    allFieldsAreDisplayed(){
        this.firstNameInput.should('be.visible')
        this.lastNameInput.should('be.visible')
        this.addressInput.should('be.visible')
        this.cityInput.should('be.visible')
        this.stateInput.should('be.visible')
        this.zipCodeInput.should('be.visible')
        this.phoneInput.should('be.visible')
        this.ssnInput.should('be.visible')
        this.usernameInput.should('be.visible')
        this.passwordInput.should('be.visible')
        this.confirmInput.should('be.visible')
    }

}

export default RegisterPage;