
import LoginPage from '../pageObject/loginPage'
import BasePage from '../pageObject/basePage'

describe('login site ',() => {    

    let loginPage;
    let basePage;

    beforeEach(() => {
        basePage = new BasePage(); 
        loginPage = new LoginPage();
        basePage.open('https://parabank.parasoft.com/').logoIsDisplayed();
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