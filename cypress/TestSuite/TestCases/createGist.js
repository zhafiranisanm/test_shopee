
context('Automation Gist', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('BASE_URL'))
        cy.login(Cypress.env('EMAIL'), Cypress.env('PASSWORD'));
    })

    it('Positive Case : Create Gist', () =>{        
      cy.get(".dropdown-menu dropdown-menu-sw").click()
      .get('a[href*="https://gist.github.com/"]').click()
      .get('input[name="gist[description]"]').click()
      .type("Create New Gist Automation")
      .get('input[name="gist[contents][][name]"]').click()
      .type("Test.txt")
      .get('.CodeMirror-code').click()
      .type("Halo, ini automation test")
      .get(".btn.btn-primary.BtnGroup-item.select-menu-button.float-none").click()
      .get(".select-menu-item-heading").withText("Create public gist").click()
      .get('button[type=submit]').withText("Create Public Gist").click()
      
})

})