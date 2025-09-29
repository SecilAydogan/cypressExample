export const getRandomNumber = (max: number) => ~~(Math.random() * max);

 Cypress.Commands.add('login', (user) => {
      cy.visit('/');
      cy.get('[id="btnProfile"]').click({force:true});
      cy.get('[id="login-mobile"]').click({force:true});
      cy.get('input[id="email').type(user.email);
      cy.get('input[id="pass"]').type(user.password);      
      cy.get('[id="login-button"]').click({force:true});
})

 Cypress.Commands.add('productSearch', (keyword:string) => {
      cy.visit('/');
      cy.get('input[id="navbar-search-input"]').type(keyword + "{enter}");
      cy.get(".product-list-link").eq(getRandomNumber(2)).click({force: true});
})