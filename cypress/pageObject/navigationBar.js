import BasePage from "./basePage";
import RegisterPage from "./registerPage";

class NavigationBar extends BasePage{

    get aboutUsPage(){
        return cy.get('a[href="about.htm"]')
    }

    get servicesPage(){
        return cy.get('a[href="services.htm"]')
    }

    get productPage(){
        return cy.get('a[href="http://www.parasoft.com/jsp/products.jsp"]')
    }

    get locationsPage(){
        return cy.get('a[href="http://www.parasoft.com/jsp/pr/contacts.jsp"]')
    }

    get adminPage(){
        return cy.get('a[href="admin.htm"]')
    }

   get usernameInput(){
    return cy.get('input[name="username"]')
   }

   get passwordInput(){
    return cy.get('input[name="username"]')
   }

   get forgotLoginInfoButton(){
    return cy.get('a[href="lookup.htm"]')
   }

   get registerButton(){
    return cy.contains('Register')
   }

   get loginButton(){
    return cy.get('[type="submit"]')
   }

   navigationBarTitleIsDisplayed(){
    cy.title().should('include','Solutions')
    return this
    }

    goToTheRegisterPage(){
        this.registerButton.click()
        return new RegisterPage();
    }

    goToTheForgotLogin(){
        this.forgotLoginInfoButton.click()
        return ForgotLoginPage
    }

    writeUsername(username){
        this.usernameInput.type(username)
        return this
    }

    writePassword(password){
        this.passwordInput.type(password)
        return this
    }

    loginWithCredentials(username, password) {
        this.writeUsername
        this.writePassword
        this.clickOnTheLoginButton
        return this
    }

}

export default NavigationBar