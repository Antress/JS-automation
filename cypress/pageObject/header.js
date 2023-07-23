import BasePage from './basePage'

class Header extends BasePage{

    get homePageButton(){
        return cy.get('input[name="username"]')
    }

    get customerCarePageButton(){
        return cy.get('input[name="username"]')
    }

    get servicesPageButton(){
        return cy.get('input[name="username"]')
    }

    get logo(){
        return cy.get('input[name="username"]')
    }

    goTotheHomePage(){
        this.homePageButton.click()
        return new HomePage
    }

    goToTheCustomerCarePage(){
        this.customerCarePageButton.click()
        return new CustomerCarePage()
    }

    goTotheServicesPage(){
        this.servicesPageButton.click()
        return new ServicesPage()
    }

}

export default Header