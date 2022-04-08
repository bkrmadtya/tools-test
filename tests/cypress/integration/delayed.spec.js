/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe('Home page', () => {
  it('should have correct page title', () => {
    cy.visit('/delayed');
    cy.get('h1').contains('Here are some delayed contents');
  });

  it('should have correct delayed components', () => {
    const latency = 2000;
    const count = 15;
    cy.visit(`/delayed?latency=${latency}&count=${count}`);

    [...Array(count).keys()].forEach((_, i) => {
      const position = i + 1;
      const attribute = `[data-testid="delayed-component-${position}"]`;
      const textContent = `Belated Hello Worlds!${position}`;
      cy.get(attribute, { timeout: latency }).contains(textContent);
    });
  });
});
