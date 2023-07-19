
import CustomerCarePage from '../pageObject/customerCarePage'
import BasePage from '../pageObject/basePage'

describe('customer care',() =>{

    let customerCarePage;
    let basePage;

    beforeEach(()=>{
        customerCarePage = new CustomerCarePage()
        basePage = new BasePage() 
        basePage.open('https://parabank.parasoft.com/').logoIsDisplayed()
        cy.get('[class = "contact"]').click()
    })

    it('Error messages are displayed after leaving all fields empty',() =>{
        customerCarePage
        .clickOnTheSendButton()
        .nameFieldErrorMessageIsDisplayed()
        .nameFieldErrorMessageIsDisplayed()
        .phoneFieldErrorMessageIsDisplayed()
        .descriptionFieldErrorMessageIsDisplayed()
    })

    it('Send message with unvalid data',() =>{
        customerCarePage
        .writeName('12345')
        .writeEmail('asdasd')
        .writePhone('asdasdasdasd')
        .writeDescription('////////')
        .clickOnTheSendButton()
        .nameFieldErrorMessageIsDisplayed()
        .nameFieldErrorMessageIsDisplayed()
        .phoneFieldErrorMessageIsDisplayed()
        .descriptionFieldErrorMessageIsDisplayed()
    })

    it('Send message with valid data',() =>{
        customerCarePage
        .writeName('Tom Hardi')
        .writeEmail('tomHard@gmail.com')
        .writePhone('0000000000')
        .writeDescription('Need help')
        .clickOnTheSendButton()
        .customerCareContactYouMessageIsDisplayed()
    })
})