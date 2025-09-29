export{};

declare global {
  namespace Cypress {
    interface Chainable {
      login(user): Chainable;
      productSearch(keyword): Chainable;
    }
  }
}