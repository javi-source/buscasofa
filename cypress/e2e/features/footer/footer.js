import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";


Given("el usuario está en la página principal", () => {
  cy.visit("/");
});

Then("debería ver el nombre {string}", (nombre) => {
  cy.get("footer").contains(String(nombre)).should("exist");
});

