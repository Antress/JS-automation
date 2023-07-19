import BasePage from './basePage'

class LoginPage extends BasePage{

    get usernameInput(){
        return cy.get('input[name="username"]')
    }

    get passwordInput(){
        return cy.get('input[name="password"]')
    }
    
    get loginButton(){
        return cy.get('[type="submit"]')
    }

    get errorMessage(){
        return cy.get('[class="error"]')

    }

    loginWithCredentials(username, password) {
        this.usernameInput.type(username)
        this.passwordInput.type(password)
        this.loginButton.click()
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

    clickOnTheLoginButton(){
        this.loginButton.click()
        return this
    }

    errorMessageIsDispalyed(){
        this.errorMessage.should('be.visible').should('have.text','Please enter a username and password.')
    }

    wrongCredentialsErrorMessageIsDispalyed(){
        this.errorMessage.should('be.visible').should('have.text','An internal error has occurred and has been logged.')
    }

    usernameInputIsDisplayed(){
        this.usernameInput.should('be.visible')
    }

    passwordInputIsDisplayed(){
        this.passwordInput.should('be.visible')
    }

}

export default LoginPage