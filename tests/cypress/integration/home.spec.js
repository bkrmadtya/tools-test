/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have correct page title', () => {
    cy.get('h1').contains('Welcome to Next.js!');
  });

  it('should have navigation links to documentation', () => {
    cy.get('a').contains('Documentation');
    cy.get('a').contains('Learn');
    cy.get('a').contains('Examples');
    cy.get('a').contains('Deploy');
  });
});
