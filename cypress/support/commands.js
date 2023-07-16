// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getCredentials', () => {
    return cy.fixture('config').then((config) => {
      return {
        username: config.username,
        password: config.password,
        unvalid_username: config.unvalid_username,
        unvalid_password: config.unvalid_password,
        email: config.email,
        unvalid_email: config.unvalid_email,
        phone_number: config.phone_number,
        unvalid_phone_number: config.unvalid_phone_number
      };
    });
  });

