describe('Página de FAQ', () => {
  beforeEach(() => {
    cy.visit('/faq');
  });

  it('debería mostrar el título de la página', () => {
    cy.contains('Preguntas Frecuentes').should('be.visible');
  });

  it('debería mostrar al menos tres preguntas', () => {
    cy.get('h3').should('have.length.at.least', 3);
  });

  it('debería contener la pregunta sobre qué es Buscasofa', () => {
    cy.contains('¿Qué es Buscasofa?').should('be.visible');
    cy.contains('Buscasofa es una aplicación web').should('exist');
  });

  it('debería contener la pregunta sobre contacto', () => {
    cy.contains('¿Cómo puedo contactar').should('be.visible');
  });

  it('debería contener la pregunta sobre comisión', () => {
    cy.contains('¿La plataforma cobra comisión?').should('be.visible');
  });
});

