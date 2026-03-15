Cypress.Commands.add('interceptOffers', () => {
  // O **/ faz com que o Cypress ignore o domínio e foque no endpoint
  // O * no final aceita qualquer query param ou barra
  cy.intercept('GET', '**/offerCards*').as('getOffers');
});

declare global {
  namespace Cypress {
    interface Chainable {
      interceptOffers(): Chainable<void>
    }
  }
}

export {};
