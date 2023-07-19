import BasePage from './basePage'

class Header extends BasePage{

    get homePageButton(){
        return cy.get('input[name="username"]')
    }

    get aboutUsPageButton(){
        return cy.get('input[name="username"]')
    }

    get customerCarePageButton(){
        return cy.get('input[name="username"]')
    }

    get servicesPageButton(){
        return cy.get('input[name="username"]')
    }

    get productPageButton(){
        return cy.get('input[name="username"]')
    }

    get locationsPageButton(){
        return cy.get('input[name="username"]')
    }

    get adminPageButton(){
        return cy.get('input[name="username"]')
    }

    get logo(){
        return cy.get('input[name="username"]')
    }

}