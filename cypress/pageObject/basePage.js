class BasePage{
    open(url){
        cy.visit(url)
        return this
    }

    logoIsDisplayed(){
        cy.title().should('include','ParaBank');
        return this
    }
}

export default BasePage