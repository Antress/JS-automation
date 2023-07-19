
import LoginPage from '../pageObject/loginPage'
import BasePage from '../pageObject/basePage'

describe('login site ',() => {    //Here you can see auto test for login page

    const loginPage = new LoginPage(); // Create an instance of LoginPage

    beforeEach(() => {
        const basePage = new BasePage(); // Create an instance of BasePage
        basePage.open('https://parabank.parasoft.com/');
        cy.title().should('include', 'ParaBank');
      });

    it('login fields are displayed',() => {
        loginPage.usernameInputIsDisplayed()
        loginPage.passwordInputIsDisplayed()
    })
    
    it('login  with unvalid credentials',() => {
        cy.getCredentials().then((credentials) => {
        loginPage.loginWithCredentials(credentials.unvalid_username,credentials.unvalid_password).wrongCredentialsErrorMessageIsDispalyed()
        })
    })

    it('Error message is displayed after leaving all fields empty',() => {
       loginPage.clickOnTheLoginButton().errorMessageIsDispalyed()
    })

    it('Error message is displayed after leaving username field empty',() => {
        cy.getCredentials().then((credentials) => {
        loginPage.writePassword(credentials.password).clickOnTheLoginButton().errorMessageIsDispalyed()
        })
    })

    it('Error message is displayed after leaving password field empty',() => {
        cy.getCredentials().then((credentials) => {
        loginPage.writeUsername(credentials.username).clickOnTheLoginButton().errorMessageIsDispalyed()
        })
    })

    it('login with valid credentials', () => {
        cy.getCredentials().then((credentials) => {
          loginPage.loginWithCredentials(credentials.username, credentials.password);
          cy.contains('h1.title', 'Accounts Overview').should('be.visible');
        }); 
    })
})