describe('Перевірка заголовка сторінки', () => {
    it('Перевірка, що заголовок містить "Cypress"', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm');
      cy.title().should('include','ParaBank');
    });
  });