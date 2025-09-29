describe('homepage', () => {
  xit('fail Login', () => {
    cy.login({email:'secil.aydogan@hotmail.com',password:'998809'});
    cy.get('.alert-danger').should('be.visible').contains('Hatalı Mail veya Şifre Girişi !!!')
  })

  it('product Search', () => {
    cy.productSearch("Samsung");
  })
})
