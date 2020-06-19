describe('Inputs', () => {
    it('can navigate to the website', () => {
        cy.visit('http://localhost:3000/pizza')
        cy.url().should('include', 'http://localhost:3000/pizza')
    })
    it('can type a name', () => {
        cy.get('input[name=name]')
        .type('Bill')
        .should('have.value', 'Bill')
    })
})
describe('Checkboxes and submit', () => {
    it("can select a pizza size", () => {
        cy.get("select")
          .select("Medium")
          .should("have.value", "Medium")
    })
    it('can select toppings', () => [
        cy.get('input[name=extraCheese]')
        .click()
        .should('be.checked')
        
    ])
    it("can submit the form data", () => {
        cy.get("button#myBtn")
          .click()
          
    })
})