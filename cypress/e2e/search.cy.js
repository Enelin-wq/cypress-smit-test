describe('Search function tests', () => {
  beforeEach(() => {
    cy.visit('https://www.smit.ee/et');   // külastan veebilehte enne igat testi
    cy.get('a.logo', { timeout: 60000 }).should('be.visible'); // ootan kuni lehe headeris logo laeb, et elemendid muutuksid nähtavaks

  });

   afterEach(() => {
        cy.clearCookies();  // Puhastab brauseri küpsised, pärast igat testi

  });

  it('Check that search gives relevant results with correct keyword', () => {
    cy.get('div.srch-btn.fcon.fcon-l') // palun lehelt võtta otsingunupu
      .should('be.visible') // kontrollin, et see oleks nähtav
      .click(); // klikin nupul
    cy.get('#autocomplete_search') // liigun otsinguribale
      .should('be.visible') // kontrollin, et element on nähtav
      .click() // Palun sellel klikkida, et oleks võimalik märksõna sisestada
      .type('praktika{enter}'); // otsingusõna sisestatakse ja aktiveeritakse vajutades ENTER
    cy.get('#search-results') // palun võtta tulemused
      .should('be.visible') // kontrollin, et need oleks nähtavad
      .and('contain', 'praktika'); // kontrollin, et vasted oleksid asjakohased ja sisaldaksid märksõna praktika
  });

      
});



