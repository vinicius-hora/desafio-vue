/// <reference types="Cypress"/>

const { groupBy } = require("lodash");

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});



describe('Acesso Vinicius', () => {  //describe what the test does
    
    before(() => cy.Acesso());   //before each test, login   ')
    
    it('Pagina Vinicius', () => {
        
        cy.get('div').contains('Vinícius').click({ force: true });

        


    })
    it('Teste China', () => {
        
        cy.get('div').contains('Vinícius').click({ force: true });
        cy.get('.v-input__control').type('China');
        cy.get('button').contains('Pesquisar pais').click({ force: true });
        cy.wait(10000);


    })
    it('Teste Argentina', () => {
        
        cy.get('div').contains('Vinícius').click({ force: true });
        cy.get('.v-input__control').type('Argentina');
        cy.get('button').contains('Pesquisar pais').click({ force: true });
    


    })
    it('Mostrar Estados', () => {
        
        cy.get('div').contains('Vinícius').click({ force: true });
        cy.get('button').contains('Mostrar dados por estado').click({ force: true });
        


    })
})