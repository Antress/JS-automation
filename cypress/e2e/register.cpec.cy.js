import RegisterPage from '../pageObject/registerPage'
import BasePage from '../pageObject/basePage'
import NavigationBar from '../pageObject/navigationBar'

describe('registe site ',() => {

    let navigationBar;

    beforeEach(()=>{
        navigationBar = new NavigationBar()
        navigationBar.open('https://parabank.parasoft.com/').logoIsDisplayed();
    })

    it('All register page fields is displayed',()=>{
        navigationBar
        .goToTheRegisterPage()
        .allFieldsAreDisplayed()
    })

    it('Register page title is displayed',()=>{
        navigationBar
        .goToTheRegisterPage()
        .allErrorMessagesIsDisplayed()
    })

    it('Error message is displayed',()=>{
        navigationBar
        .goToTheRegisterPage()
        .allErrorMessagesIsDisplayed()
    })

    it('Register with valid credentials',()=>{
        cy.getCredentials().then((credentials) => {
        navigationBar
        .goToTheRegisterPage()
        .writeFirstName(credentials.first_name)
        .writeLastName(credentials.last_name)
        .writeAddress(credentials.address)
        .writeCity(credentials.city)
        .writePhone(credentials.phone_number)
        .writeSSN(credentials.SSN)
        .writeUsername(credentials.username)
        .writePassword(credentials.password)
        .writeConfirmPassword(credentials.password)
        .clickOnTheRegistrationButton()
        })
    })
})