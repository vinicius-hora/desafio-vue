/// <reference types="Cypress" />

//acesso a api
Cypress.Commands.add("Acesso", () => {
    cy.visit('http://localhost:8081');
    
  });