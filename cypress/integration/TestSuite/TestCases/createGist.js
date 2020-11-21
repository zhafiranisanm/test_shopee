
context('User Create New Gist', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('BASE_URL'))
        cy.login(Cypress.env('EMAIL'), Cypress.env('PASSWORD'));
    })

    it('Create, Edit, Delete Gist', () =>{
        
      //create new gist
      cy.get('[data-ga-click= "Header, go to new gist, text:new gist"]').click()
      .get('input[name="gist[description]"]').click()
      .type("Create New Gist Automation")
      .get('input[name="gist[contents][][name]"]').click()
      .type("Test.txt")
      .get('.CodeMirror-code').click()
      .type("Halo, ini automation test")
      .get('.details-reset.details-overlay.select-menu.BtnGroup-parent.position-relative').click()
     .get('.select-menu-item').eq(1).click()
     .get('.btn.btn-primary.BtnGroup-item.hx_create-pr-button.js-sync-select-menu-button').click('left')

     //edit gist
     .get('ul.d-md-flex.d-none.pagehead-actions.float-none').children().eq(0).click()
     .get('.CodeMirror-code').click()
     .type("Halo, ini automation test sesudah di edit")
     .get('button[type="submit"]').contains("Update public gist").click()

     //delete gist
     .get('ul.d-md-flex.d-none.pagehead-actions.float-none').children().eq(1).click()
})

it('View Gist', () =>{
        
  cy.get('.Header-link.name').click()
  .get('[data-ga-click="Header, go to your gists, text:your gists"]').should("have.text","Your gists")
  .get('[data-ga-click="Header, go to your gists, text:your gists"]').click()
})


})