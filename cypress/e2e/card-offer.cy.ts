import { IHostOffer } from "../../src/app/interfaces/host";
import { Interception } from 'cypress/types/net-stubbing';
import { slugify } from "../support/utils";

describe('renders offer card', () => {
  let visibleOffers: IHostOffer[] = [];

  beforeEach(() => {
    // 1. Prepara o interceptor (definido no seu commands.ts) para achar a URL da API e criar o alias '@getOffers'
    cy.interceptOffers();

    // 2. Visita a rota RAIZ ('') definida no seu routes do Angular
    cy.visit('/');

    // 3. Aguarda explicitamente a chamada acontecer e dá um apelido (alias), para o Cypress nao testar antes da API responder
    cy.wait('@getOffers').then((interception) => {
      const allOffers = interception.response?.body as IHostOffer[];

      visibleOffers = allOffers.filter((offer, index, array) => {
        return offer.showAlert && array.findIndex(o => o.showAlert) === index;
      });
    });
  });

  it('should render the correct number of child components based on filter', () => {
    cy.get('app-card-offer').should('have.length', visibleOffers.length);
  });

  it('should display the informational report footer', () => {
    cy.get('.info_report').should('be.visible');
  });

  it('should render correct content inside each offer card', () => {
    // Se a lista estiver vazia, o 'each' nem será executado (o que é correto)
    cy.get('app-card-offer').each(($card, index) => {
      const data = visibleOffers[index];

      cy.wrap($card).within(() => {
        cy.get('.card-example__title').should('contain.text', data.title);
        cy.get('.card-example__description').should('contain.text', data.description);
      });
    });
  });

  it('should have a unique and formatted data-cy attribute for each visible card', () => {
    cy.get('app-card-offer').each(($card, index) => {
      const data = visibleOffers[index];
      const expectedSlug = slugify(data.title);
      const expectedAttr = `card-offer-${expectedSlug}`;

      // Entramos no componente para achar a div interna
      cy.wrap($card).within(() => {
        // Buscamos a div que tem a classe ou o atributo
        cy.get('.card-example') // ou cy.get('[data-cy]')
          .should('have.attr', 'data-cy', expectedAttr)
          .and('be.visible');
      });
    });
  });

  it('should render the correct dynamic component based on offer type', () => {
    // Pegamos a primeira oferta visível para validar o mapeamento
    const firstOffer = visibleOffers[0];

    const typeToSelector: Record<string, string> = {
      'card_animated_compact': 'app-example-card-a',
      'card_animated_summary': 'app-example-card-b',
      'card_animated_detail':  'app-example-card-c',
      'card_animated_split':   'app-example-card-d',
      'card_offer':            'app-example-card-e'
    };

    const expectedSelector = typeToSelector[firstOffer.type];

    cy.get('app-card-offer').first().within(() => {
      cy.get(expectedSelector).should('exist').and('be.visible');
    });
  });
});
